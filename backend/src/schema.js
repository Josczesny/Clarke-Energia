const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Fornecedor {
    id: ID!
    nome: String!
    logo: String!
    estadoOrigem: String!
    custoKwh: Float!
    limiteMinKwh: Float!
    totalClientes: Int!
    avaliacaoMedia: Float!
    descricao: String!
    certificacoes: [String!]!
  }

  enum OrdemClassificacao {
    asc
    desc
  }

  enum CriterioOrdenacao {
    custoKwh
    avaliacaoMedia
    totalClientes
  }

  type Query {
    fornecedores: [Fornecedor!]!
    fornecedoresPorConsumo(consumoMensal: Float!): [Fornecedor!]!
    fornecedoresPorEstado(estado: String!): [Fornecedor!]!
    fornecedoresOrdenados(
      criterio: CriterioOrdenacao = custoKwh
      ordem: OrdemClassificacao = asc
    ): [Fornecedor!]!
  }
`;

module.exports = typeDefs; 