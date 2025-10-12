"use server";

import { ContactCreationRequest, ContactModel } from "@/models/contactModel";
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

export const addNewContact = async (contact: ContactCreationRequest) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const { data: result, error } = await supabase
    .from("contacts")
    .insert({ ...contact, user_id: userId })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return result;
};
