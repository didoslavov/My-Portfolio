import { GET_GUESTBOOK_ENTRIES, GuestBookEntry } from "@/graphql/queries";
import { getClient } from "../client";

export async function getData() {
  const { data, error, errors } = await getClient().query<{
    guest_book: GuestBookEntry[];
  }>({
    query: GET_GUESTBOOK_ENTRIES,
  });

  return { data, error, errors };
}
