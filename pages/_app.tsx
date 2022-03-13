import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
