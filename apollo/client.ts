import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";

const authLink = setContext(async (_req, { headers }) => {
  return {
    ...headers
  };
});
const uploadLink = createUploadLink({
  uri: "https://rickandmortyapi.com/graphql",
}) as unknown as ApolloLink;

const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache({ addTypename: false }),
});

export default client;
