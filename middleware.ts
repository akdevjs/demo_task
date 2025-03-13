import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("user")?.value;

  if (
    authCookie === "Authenticated" &&
    request.nextUrl.pathname.includes("login")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    authCookie !== "Authenticated" &&
    request.nextUrl.pathname.includes("dashboard")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
