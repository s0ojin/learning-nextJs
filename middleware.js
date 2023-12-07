import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({ req: req });

  if (req.nextUrl.pathname.startsWith("/write")) {
    if (session === null) {
      return NextResponse.redirect(
        "http://localhost:3000/api/auth/signin",
        req.url
      );
    }
  }

  if (req.nextUrl.pathname.startsWith("/list")) {
    console.log(req.headers.get("sec-ch-ua-platform"));
    return NextResponse.next();
  }
}
