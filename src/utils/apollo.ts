import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Session } from "next-auth";
import { useMemo } from "react";

export type UserSession = {
  id: number | string;
  jwt: string;
} & Session;

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: UserSession | null) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  });

  const authLink = setContext((_, { headers }) => {
    const authorization = session?.jwt ? `Bearer ${session?.jwt}` : "";
    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(
  initialState = null,
  session?: UserSession | null
) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === "undefined") return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null, session?: UserSession) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  );
  return store;
}
