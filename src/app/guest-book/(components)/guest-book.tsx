"use client";

import Message from "@/app/guest-book/(components)/message";
import { GuestBookEntry } from "@/graphql/queries";

function GuestBook({ data }: { data: { guest_book: GuestBookEntry[] } }) {
  // const { data, error } = useSuspenseQuery<{
  //   guest_book: GuestBookEntry[];
  // }>(GET_GUESTBOOK_ENTRIES);

  return (
    <section className="mx-auto flex max-w-[1440px] items-center justify-center">
      <ul className="w-1/2">
        {data.guest_book.map((m) => (
          <li key={m.id}>
            <Message
              user={m.user}
              message={m.message}
              created_at={m.created_at}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GuestBook;
