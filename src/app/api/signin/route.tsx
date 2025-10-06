import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { signinMock } from "@/app/services/signin";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;
  const validCredentials: boolean = signinMock(email, password);

  if (!validCredentials) {
    return NextResponse.json({ success: false });
  }

  //Set cookies
  const cookiesHandler = await cookies();
  cookiesHandler.set("isLoggedIn", "true");

  return NextResponse.json({ success: true });
}
