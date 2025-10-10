"use server";

import { createClient } from "@/utils/supabase/server";
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
