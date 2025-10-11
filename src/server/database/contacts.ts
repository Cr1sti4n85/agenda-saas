"use server";

import { ContactModel } from "@/models/contactModel";
import { createClient } from "@/utils/supabase/server";

export const getAllContacts = async (id: string) => {
  const supabase = await createClient();

  const { data: contacts, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("user_id", id);

  if (error) {
    console.log(error);
  }
  return contacts as ContactModel[];
};
