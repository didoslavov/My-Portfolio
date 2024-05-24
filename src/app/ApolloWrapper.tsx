"use client";

import { makeClient } from "@/lib/makeClient";
import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import React, { PropsWithChildren } from "react";

export function ApolloWrapper({ children }: PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient()}>
      {children}
    </ApolloNextAppProvider>
  );
}
