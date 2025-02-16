# Documentação da API GraphQL

## Queries

### fornecedores
Retorna todos os fornecedores cadastrados.

### fornecedoresPorConsumo(consumoMensal: Float!)
Retorna fornecedores que podem atender o consumo especificado.

### fornecedoresPorEstado(estado: String!)
Filtra fornecedores por estado.

### fornecedoresOrdenados(criterio: CriterioOrdenacao, ordem: OrdemClassificacao)
Retorna fornecedores ordenados por critério específico.

## Types

### Fornecedor
- id: ID!
- nome: String!
- logo: String!
- estadoOrigem: String!
- custoKwh: Float!
- limiteMinKwh: Float!
- totalClientes: Int!
- avaliacaoMedia: Float!
- descricao: String!
- certificacoes: [String!]! 