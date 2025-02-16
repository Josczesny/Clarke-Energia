# Guia de Testes

## Pré-requisitos
- Node.js 18+
- npm ou yarn

## Frontend

### Testes Unitários e de Integração
```bash
cd frontend
npm test
```

### Cobertura de Testes
```bash
npm run test:coverage
```

### Testes E2E (Cypress)
```bash
# Interface gráfica
npm run cypress:open

# Modo headless
npm run cypress:run
```

## Backend

### Testes Unitários e de Integração
```bash
cd backend
npm test
```

### Cobertura de Testes
```bash
npm run test:coverage
```

## Verificação Manual

### Frontend
1. Acesse http://localhost:3000
2. Digite um consumo (ex: 30000)
3. Verifique se os fornecedores são exibidos
4. Teste os filtros por estado
5. Teste a ordenação

### Backend (GraphQL Playground)
1. Acesse http://localhost:4000/graphql
2. Execute a query:
```graphql
query {
  fornecedoresPorConsumo(consumoMensal: 30000) {
    nome
    custoKwh
    limiteMinKwh
  }
}
``` 