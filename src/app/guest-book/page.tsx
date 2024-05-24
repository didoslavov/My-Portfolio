import React from "react";
import GuestBook from "./(components)/guest-book";
import { GET_GUESTBOOK_ENTRIES } from "@/graphql/queries";
import { getClient } from "@/lib/client";

async function getData() {
  const { data, error, errors } = await getClient().query({
    query: GET_GUESTBOOK_ENTRIES,
  });

  return { data, error, errors };
}

const page = async () => {
  const { data, error, errors } = await getData();

  return <GuestBook data={data} />;
};

export default page;
