"use server";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const uri = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

export function makeClient() {
  const httpLink = new HttpLink({
    uri,
    fetchOptions: { cache: "no-store" },
    headers: {
      "x-hasura-admin-secret": hasuraAdminSecret,
    },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}
