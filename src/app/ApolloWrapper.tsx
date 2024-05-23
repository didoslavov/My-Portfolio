"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import React, { PropsWithChildren } from "react";

// const uri = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";
// const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

function makeClient(uri: string, hasuraAdminSecret: string) {
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

export function ApolloWrapper({
  children,
  credentials,
}: PropsWithChildren & {
  credentials: { uri: string; hasuraAdminSecret: string };
}) {
  return (
    <ApolloNextAppProvider
      makeClient={() =>
        makeClient(credentials.uri, credentials.hasuraAdminSecret)
      }
    >
      {children}
    </ApolloNextAppProvider>
  );
}
