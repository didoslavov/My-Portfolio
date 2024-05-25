"use server";

import {
  GET_GUESTBOOK_ENTRIES,
  GuestBookEntry,
} from "@/graphql/queries";
import { getClient } from "../client";
import { revalidatePath } from "next/cache";
import { ADD_GUESTBOOK_ENTRY } from "@/graphql/mutations";

export async function getMessages() {
  const { data, errors } = await getClient().query<{
    guest_book: GuestBookEntry[];
  }>({
    query: GET_GUESTBOOK_ENTRIES,
  });

  return { data, errors };
}

export async function addMessage(user: string, message: string) {
  const { data, errors } = await getClient().mutate<{
    guest_book: GuestBookEntry;
  }>({ mutation: ADD_GUESTBOOK_ENTRY, variables: { user, message } });

  revalidatePath("/guest-book");
  return { data, errors };
}
