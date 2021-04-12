import { ApolloClient, InMemoryCache } from "@apollo/client";

import { BASE_URL_GQL } from "core/utils/env";

export const client = new ApolloClient({
   uri: BASE_URL_GQL,
   cache: new InMemoryCache(),
});
