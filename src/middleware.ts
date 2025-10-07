import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const nextReponse = NextResponse.next({ request });

  const cookiesHanlder = await cookies();

  const isLoggedIn = cookiesHanlder.get("isLoggedIn");

  if (request.nextUrl.pathname.startsWith("/dashboard") && !isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/login"; //modify the pathname to login
    return NextResponse.redirect(url);
  }

  if (request.nextUrl.pathname.startsWith("/login") && isLoggedIn) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard"; //modify the pathname to login
    return NextResponse.redirect(url);
  }

  return nextReponse;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
