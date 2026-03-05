import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const isProtected = url.pathname.startsWith("/checkout");
  if (!isProtected) return NextResponse.next();

  const hasSession = Boolean(req.cookies.get("weclawd_session")?.value);
  if (hasSession) return NextResponse.next();

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("next", url.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/checkout/:path*"]
};
