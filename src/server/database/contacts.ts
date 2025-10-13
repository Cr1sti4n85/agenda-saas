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

export const updateContact = async (id: number, isFavorite: boolean) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const { data, error } = await supabase
    .from("contacts")
    .update({ is_favorite: isFavorite })
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const deleteContactById = async (id: number) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;

  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", id)
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }
  return;
};
