# Clarke Energia

Sistema de busca de fornecedores de energia por consumo mensal.

## 🚀 Início Rápido

1. Pré-requisitos:
   - Node.js 14+ instalado
   - Navegador web moderno (Chrome, Firefox, Safari, Edge ou Brave)

2. Instalação:
   ```bash
   git clone https://github.com/seu-usuario/clarke-energia.git
   cd clarke-energia
   .\start-local.bat
   ```

3. Uso:
   - Frontend: http://localhost:3000
   - GraphQL Playground: http://localhost:4000/graphql

## 💡 Funcionalidades

- Busca de fornecedores por consumo mensal (kWh)
- Filtragem por estado
- Ordenação por preço, avaliação e número de clientes
- Interface responsiva e intuitiva

## 🧪 Testando

1. Digite um consumo (ex: 30.000 kWh)
2. Clique em "Buscar Fornecedores"
3. Use os filtros de estado e ordenação
4. Explore o GraphQL Playground para testar queries

## 📝 Notas

- O aplicativo funciona em qualquer navegador moderno
- As URLs são abertas no navegador padrão do sistema
- Não é necessário fechar outros navegadores ou abas

## 💡 Sobre o Projeto

Aplicação desenvolvida como parte do processo seletivo da Clarke Energia. O projeto permite que usuários encontrem fornecedores de energia compatíveis com seu consumo mensal, oferecendo filtros e ordenação para melhor escolha.

## 🎯 Funcionalidades Principais

- Busca de fornecedores por consumo mensal (kWh)
- Filtragem por estado de origem
- Ordenação por preço, avaliação e número de clientes
- Visualização detalhada de cada fornecedor
- Interface responsiva e intuitiva

## 🚀 Tecnologias

- Frontend:
  - React
  - Apollo Client
  - Styled Components
  - Jest & Testing Library
  - TypeScript

- Backend:
  - Node.js
  - Express
  - GraphQL (Apollo Server)
  - Jest
  - TypeScript

- DevOps:
  - Docker
  - Docker Compose
  - GitHub Actions (CI/CD)
  - Netlify/Vercel (Deploy)

## 📋 Pré-requisitos

- Node.js 18+
- Docker e Docker Compose
- Git

## 🚀 Começando

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/clarke-energia.git
cd clarke-energia
```

2. Instale as dependências:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Configure as variáveis de ambiente:

```bash
# Backend (.env)
PORT=4000
NODE_ENV=development

# Frontend (.env)
REACT_APP_API_URL=http://localhost:4000/graphql
```

4. Inicie com Docker:

```bash
docker-compose up -d
```

## 🧪 Testes

### Frontend
```bash
cd frontend
# Testes unitários
npm test
# Testes E2E
npm run cypress:open
```

### Backend
```bash
cd backend
npm test
```

## 📊 Cobertura de Testes

- Frontend: > 80% de cobertura
- Backend: > 90% de cobertura
- E2E: Principais fluxos cobertos

## 📝 Documentação

### GraphQL API

O playground GraphQL está disponível em `/graphql` no ambiente de desenvolvimento.

Principais queries:
- fornecedores: Lista todos os fornecedores
- fornecedoresPorConsumo: Filtra por consumo mensal
- fornecedoresPorEstado: Filtra por estado
- fornecedoresOrdenados: Ordena por critérios específicos

[Documentação completa da API](./backend/docs/API.md)

## 🌐 Deploy

O projeto está disponível online:
- Frontend: [https://clarke-energia.vercel.app](https://clarke-energia.vercel.app)
- Backend: [https://clarke-energia-api.vercel.app/graphql](https://clarke-energia-api.vercel.app/graphql)

## 📦 Estrutura do Projeto

```
clarke-energia/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConsumoForm.jsx
│   │   │   ├── FiltrosOrdenacao.jsx
│   │   │   └── FornecedorCard.jsx
│   │   ├── hooks/
│   │   │   └── useConsumo.js
│   │   ├── tests/
│   │   │   ├── components/
│   │   │   │   ├── ConsumoForm.test.js
│   │   │   │   └── FiltrosOrdenacao.test.js
│   │   │   └── App.test.js
│   │   ├── App.js
│   │   └── index.js
│   ├── cypress/
│   │   └── integration/
│   │       ├── app.spec.js
│   │       └── filtros.spec.js
│   │   ├── package.json
│   │   └── vercel.json
│   ├── backend/
│   │   ├── src/
│   │   │   ├── resolvers/
│   │   │   │   └── index.js
│   │   │   ├── schema/
│   │   │   │   └── index.js
│   │   │   ├── services/
│   │   │   │   └── fornecedorService.js
│   │   │   ├── data/
│   │   │   │   └── fornecedores.js
│   │   │   ├── middlewares/
│   │   │   │   └── errorHandler.js
│   │   │   ├── tests/
│   │   │   │   ├── integration/
│   │   │   │   │   └── graphql.test.js
│   │   │   │   ├── resolvers.test.js
│   │   │   │   └── fornecedorService.test.js
│   │   │   └── index.js
│   │   ├── docs/
│   │   │   ├── API.md
│   │   │   └── GRAPHQL.md
│   │   ├── jest.config.js
│   │   ├── package.json
│   │   └── vercel.json
│   ├── docker/
│   │   ├── frontend.Dockerfile
│   │   └── backend.Dockerfile
│   ├── docs/
│   │   └── DEPLOY.md
│   ├── .github/
│   │   └── workflows/
│   │       └── ci.yml
│   ├── docker-compose.yml
│   └── README.md
```

## 📝 Funcionalidades

- Inserção do consumo mensal de energia
- Listagem de fornecedores compatíveis
- Filtragem por estado de origem
- Ordenação por preço/avaliação
- Visualização detalhada dos fornecedores

## 🚀 Deploy

### Frontend (Vercel)

1. Crie uma conta na Vercel
2. Conecte seu repositório GitHub
3. Configure as variáveis de ambiente:
   - REACT_APP_API_URL=https://seu-backend.vercel.app/graphql

### Backend (Vercel)

1. Na mesma conta Vercel
2. Importe o diretório backend
3. Configure as variáveis de ambiente:
   - NODE_ENV=production
   - PORT=4000

### Configuração do GitHub Actions

1. No GitHub, vá em Settings > Secrets
2. Adicione os seguintes secrets:
   - VERCEL_TOKEN
   - VERCEL_ORG_ID
   - VERCEL_PROJECT_ID
