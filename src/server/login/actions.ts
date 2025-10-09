"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(email: string, password: string) {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return error;
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function logout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(email: string, password: string) {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return error;
  }

  revalidatePath("/", "layout");
  redirect("/login");
}

export const getCurrentUser = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getSession();

  return data.session?.user;
};
