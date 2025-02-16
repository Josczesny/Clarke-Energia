import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default client; 