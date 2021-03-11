import { ApolloClient, InMemoryCache } from "@apollo/client";

import { BASR_URL_GQL } from "core/env";

export const client = new ApolloClient({
   uri: BASR_URL_GQL,
   cache: new InMemoryCache(),
});
