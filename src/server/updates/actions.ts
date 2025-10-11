"use server";

import { createClient } from "@/utils/supabase/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export const updateName = async (updatedName: string) => {
  const supabase = await createClient();
  await supabase.auth.updateUser({
    data: {
      display_name: updatedName,
    },
  });
  revalidatePath("/dashboard/profile", "page");
};

export const requestResetPassword = async (host: string) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.email) {
    await supabase.auth.resetPasswordForEmail(user?.email, {
      redirectTo: `${host}/reset-password`,
    });
    return true;
  }
  return false;
};

export const updatePassword = async (
  newPassword: string,
  tokenHash: string,
  type: EmailOtpType
) => {
  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });
    await supabase.auth.updateUser({
      password: newPassword,
    });
    supabase.auth.signOut();
  }
};
