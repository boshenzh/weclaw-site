import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-pathname", url.pathname);

  const isProtected = url.pathname.startsWith("/checkout");
  if (!isProtected) return NextResponse.next({ request: { headers: requestHeaders } });

  const hasSession = Boolean(req.cookies.get("weclawd_session")?.value);
  if (hasSession) return NextResponse.next({ request: { headers: requestHeaders } });

  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("next", url.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logos/).*)"],
};
