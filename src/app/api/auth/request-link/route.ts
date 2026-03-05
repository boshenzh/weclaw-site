import { NextResponse } from "next/server";
import { Resend } from "resend";
import { serverEnv } from "@/lib/env";
import { signLoginToken } from "@/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const email = body?.email;
  const next = body?.next;

  if (typeof email !== "string" || !email.includes("@")) {
    return new NextResponse("Invalid email", { status: 400 });
  }

  const token = await signLoginToken({ email });
  const url = new URL("/api/auth/callback", serverEnv.NEXT_PUBLIC_SITE_URL);
  url.searchParams.set("token", token);
  if (typeof next === "string" && next.startsWith("/")) url.searchParams.set("next", next);

  const resend = new Resend(serverEnv.RESEND_API_KEY);

  await resend.emails.send({
    from: serverEnv.EMAIL_FROM,
    to: email,
    subject: "登录 weclawd.com",
    text: `点击登录：${url.toString()}\n\n此链接15分钟内有效。`,
  });

  return NextResponse.json({ ok: true });
}
