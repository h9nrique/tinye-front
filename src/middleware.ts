import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = new URL(request.url);

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (url.pathname === "/logout") {
    const cookieStorage = await cookies();
    cookieStorage.delete("token");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/logout"],
};
