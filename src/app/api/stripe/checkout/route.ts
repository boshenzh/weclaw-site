import { NextResponse } from "next/server";
import Stripe from "stripe";
import { serverEnv } from "@/lib/env";
import { verifySessionToken } from "@/lib/auth";

const stripe = new Stripe(serverEnv.STRIPE_SECRET_KEY);

const PLAN_CONFIG: Record<string, { amountCny: number; name: string }> = {
  managed: { amountCny: 3800, name: "托管部署" },
  personal_pc: { amountCny: 1888, name: "个人部署（远程）" },
};

export async function POST(req: Request) {
  const cookie = req.headers.get("cookie") || "";
  const m = cookie.match(/(?:^|; )weclawd_session=([^;]+)/);
  if (!m) return new NextResponse("Unauthorized", { status: 401 });

  let session;
  try {
    session = await verifySessionToken(decodeURIComponent(m[1]));
  } catch {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const body = await req.json().catch(() => null);
  const plan = body?.plan;
  const promoCode = body?.promoCode;

  if (typeof plan !== "string" || !PLAN_CONFIG[plan]) {
    return new NextResponse("Invalid plan", { status: 400 });
  }

  const cfg = PLAN_CONFIG[plan];
  const successUrl = new URL("/success", serverEnv.NEXT_PUBLIC_SITE_URL);
  successUrl.searchParams.set("session_id", "{CHECKOUT_SESSION_ID}");
  const cancelUrl = new URL("/checkout", serverEnv.NEXT_PUBLIC_SITE_URL);

  // If promoCode provided, we validate it exists and is active.
  let discounts: Stripe.Checkout.SessionCreateParams.Discount[] | undefined;
  if (typeof promoCode === "string" && promoCode.length > 0) {
    const promos = await stripe.promotionCodes.list({ code: promoCode, active: true, limit: 1 });
    if (promos.data.length === 0) {
      return new NextResponse("Invalid promo code", { status: 400 });
    }
    discounts = [{ promotion_code: promos.data[0].id }];
  }

  const checkout = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: session.email,
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
    metadata: {
      user_id: session.sub,
      plan,
    },
    // Also allow entering promo codes directly on Stripe checkout if you want
    // (we already apply discounts if a code is provided).
    allow_promotion_codes: !discounts,
  });

  if (!checkout.url) return new NextResponse("Missing checkout url", { status: 500 });
  return NextResponse.json({ url: checkout.url });
}
