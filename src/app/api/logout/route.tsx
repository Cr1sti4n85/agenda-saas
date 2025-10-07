import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  //Set cookies
  const cookiesHandler = await cookies();
  cookiesHandler.delete("isLoggedIn");
  cookiesHandler.delete("user");

  return NextResponse.json({ success: true });
}
