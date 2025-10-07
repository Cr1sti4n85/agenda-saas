"use server";
import { signinMock } from "@/app/services/signin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signinAction = async (email: string, password: string) => {
  const validCredentials: boolean = signinMock(email, password);

  if (!validCredentials) {
    return false;
  }

  //Set cookies
  const cookiesHandler = await cookies();
  cookiesHandler.set("isLoggedIn", "true");
  const user = {
    name: "cristian",
    email: "cris@gmail.com",
    avatar: "/avatar1.png",
  };
  cookiesHandler.set("user", JSON.stringify(user));

  redirect("/dashboard");
};
