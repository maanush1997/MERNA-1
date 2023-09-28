import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({ uri: "http://localhost:4001/graphql", cache: new InMemoryCache() });

function AppProviders({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default AppProviders;
