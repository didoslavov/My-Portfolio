// src/components/ApolloWrapper.tsx

"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import React, { PropsWithChildren, useEffect, useState } from "react";

async function fetchApolloConfig() {
  const response = await fetch("/api/hasura");
  if (!response.ok) {
    throw new Error("Failed to fetch Apollo config");
  }
  return response.json();
}

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

export function ApolloWrapper({ children }: PropsWithChildren) {
  const [config, setConfig] = useState<{
    uri: string;
    hasuraAdminSecret: string;
  } | null>(null);

  useEffect(() => {
    fetchApolloConfig()
      .then((data) => setConfig(data))
      .catch((error) => console.error(error));
  }, []);

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <ApolloNextAppProvider
      makeClient={() => makeClient(config.uri, config.hasuraAdminSecret)}
    >
      {children}
    </ApolloNextAppProvider>
  );
}
