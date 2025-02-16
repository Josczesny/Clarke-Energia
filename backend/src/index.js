const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors({
      origin: ['http://localhost:3000', 'http://localhost:4000'],
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ req }),
    })
  );

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`
🚀 Servidor rodando em http://localhost:${PORT}/graphql
📊 GraphQL Playground disponível em http://localhost:${PORT}/graphql
    `);
  });
}

startServer().catch(err => {
  console.error('Erro ao iniciar o servidor:', err);
}); 