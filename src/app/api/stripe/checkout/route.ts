import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverEnv } from "@/lib/env";

const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);

const PLAN_CONFIG: Record<string, { amountCny: number; name: string }> = {
  managed: { amountCny: 3800, name: "托管部署" },
  personal_pc: { amountCny: 1888, name: "个人部署（远程）" },
  test_10: { amountCny: 10, name: "测试支付（¥10）" },
};

async function createCheckout(plan: string, promoCode?: string | null) {
  if (!PLAN_CONFIG[plan]) {
    return { error: new NextResponse("Invalid plan", { status: 400 }) } as const;
  }

  const cfg = PLAN_CONFIG[plan];
  const successUrl = new URL("/success", serverEnv.NEXT_PUBLIC_SITE_URL);
  successUrl.searchParams.set("session_id", "{CHECKOUT_SESSION_ID}");
  const cancelUrl = new URL("/#pricing", serverEnv.NEXT_PUBLIC_SITE_URL);

  let discounts: Stripe.Checkout.SessionCreateParams.Discount[] | undefined;
  if (typeof promoCode === "string" && promoCode.length > 0) {
    const promos = await stripe.promotionCodes.list({ code: promoCode, active: true, limit: 1 });
    if (promos.data.length === 0) {
      return { error: new NextResponse("Invalid promo code", { status: 400 }) } as const;
    }
    discounts = [{ promotion_code: promos.data[0].id }];
  }

  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "cny",
          unit_amount: cfg.amountCny * 100,
          product_data: { name: cfg.name },
        },
      },
    ],
    discounts,
    success_url: successUrl.toString(),
    cancel_url: cancelUrl.toString(),
    metadata: { plan },
    allow_promotion_codes: !discounts,
  });

  if (!checkout.url) {
    return { error: new NextResponse("Missing checkout url", { status: 500 }) } as const;
  }

  return { url: checkout.url } as const;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const plan = searchParams.get("plan") || "";
  const promoCode = searchParams.get("promoCode");

  const result = await createCheckout(plan, promoCode);
  if ("error" in result) return result.error;
  return NextResponse.redirect(result.url, 303);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const plan = body?.plan;
  const promoCode = body?.promoCode;

  if (typeof plan !== "string") {
    return new NextResponse("Invalid plan", { status: 400 });
  }

  const result = await createCheckout(plan, promoCode);
  if ("error" in result) return result.error;
  return NextResponse.json({ url: result.url });
}
