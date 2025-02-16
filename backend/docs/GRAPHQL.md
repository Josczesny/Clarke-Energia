# Documentação GraphQL

## Queries Disponíveis

### fornecedores
```graphql
query {
  fornecedores {
    id
    nome
    logo
    estadoOrigem
    custoKwh
    limiteMinKwh
    totalClientes
    avaliacaoMedia
    descricao
    certificacoes
  }
}
```

### fornecedoresPorConsumo
```graphql
query($consumo: Float!) {
  fornecedoresPorConsumo(consumoMensal: $consumo) {
    id
    nome
    # ... outros campos
  }
}
```

### fornecedoresPorEstado
```graphql
query($estado: String!) {
  fornecedoresPorEstado(estado: $estado) {
    id
    nome
    # ... outros campos
  }
}
```

## Exemplos de Uso

### Buscar Fornecedores por Consumo
```graphql
query {
  fornecedoresPorConsumo(consumoMensal: 30000) {
    nome
    custoKwh
    limiteMinKwh
  }
}
```

### Ordenar Fornecedores
```graphql
query {
  fornecedoresOrdenados(
    criterio: custoKwh
    ordem: asc
  ) {
    nome
    custoKwh
  }
}
``` 