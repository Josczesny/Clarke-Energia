const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../../schema');
const resolvers = require('../../resolvers');

describe('GraphQL API', () => {
  let query;

  beforeAll(() => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const testClient = createTestClient(server);
    query = testClient.query;
  });

  it('deve retornar fornecedores filtrados por consumo', async () => {
    const GET_FORNECEDORES = `
      query($consumo: Float!) {
        fornecedoresPorConsumo(consumoMensal: $consumo) {
          id
          nome
          limiteMinKwh
        }
      }
    `;

    const res = await query({
      query: GET_FORNECEDORES,
      variables: { consumo: 6000 }
    });

    expect(res.data.fornecedoresPorConsumo).toBeDefined();
    expect(res.errors).toBeUndefined();
    res.data.fornecedoresPorConsumo.forEach(f => {
      expect(f.limiteMinKwh).toBeLessThanOrEqual(6000);
    });
  });
}); 