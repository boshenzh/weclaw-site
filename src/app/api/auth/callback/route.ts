import { NextResponse } from "next/server";
import { verifyLoginToken, signSessionToken } from "@/lib/auth";
import { sql } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token") || "";
  const next = searchParams.get("next") || "/checkout";

  if (!token) return new NextResponse("Missing token", { status: 400 });

  const { email } = await verifyLoginToken(token);

  // Ensure user exists
  const db = sql();
  await db`
    create table if not exists users (
      id bigserial primary key,
      email text unique not null,
      created_at timestamptz not null default now()
    )
  `;

  const rows = await db`
    insert into users (email) values (${email})
    on conflict (email) do update set email = excluded.email
    returning id
  `;

  const userId = String(rows[0].id);
  const session = await signSessionToken({ sub: userId, email });

  const res = NextResponse.redirect(new URL(next, req.url));
  res.cookies.set({
    name: "weclawd_session",
    value: session,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return res;
}
