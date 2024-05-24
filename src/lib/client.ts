import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const uri = process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT || "";
const hasuraAdminSecret = process.env.HASURA_ADMIN_SECRET || "";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri,
      fetchOptions: { cache: "no-store" },
      headers: {
        "x-hasura-admin-secret": hasuraAdminSecret,
      },
    }),
  });
});
