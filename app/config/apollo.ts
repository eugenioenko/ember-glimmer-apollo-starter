// Import the setClient function from the "glimmer-apollo" package.
import { setClient } from "glimmer-apollo";

// Import necessary Apollo Client modules.
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";

// Define a function that sets up and configures the Apollo Client.
export default function setupApolloClient(context: object): void {
  // Create an HTTP link that points to the GraphQL server.
  const httpLink = createHttpLink({
    uri: "https://graphqlzero.almansi.me/api",
  });

  // Create an in-memory cache for Apollo Client to store data.
  const cache = new InMemoryCache();

  // Create an instance of Apollo Client with the configured link and cache.
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  // Set the Apollo Client instance on the provided context object.
  setClient(context, apolloClient);
}
