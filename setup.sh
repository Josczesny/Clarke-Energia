#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Iniciando setup do projeto Clarke Energia...${NC}"

# Verificar dependências
echo -e "${BLUE}Verificando dependências...${NC}"
if ! command -v node &> /dev/null; then
    echo "Node.js não encontrado. Por favor, instale o Node.js"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "Docker não encontrado. Por favor, instale o Docker"
    exit 1
fi

# Instalar dependências do backend
echo -e "${BLUE}Instalando dependências do backend...${NC}"
cd backend
npm install

# Instalar dependências do frontend
echo -e "${BLUE}Instalando dependências do frontend...${NC}"
cd ../frontend
npm install

# Voltar para a raiz
cd ..

# Criar arquivos .env
echo -e "${BLUE}Configurando variáveis de ambiente...${NC}"

# Backend .env
cat > backend/.env << EOL
PORT=4000
NODE_ENV=development
EOL

# Frontend .env
cat > frontend/.env << EOL
REACT_APP_API_URL=http://localhost:4000/graphql
EOL

# Iniciar containers Docker
echo -e "${BLUE}Iniciando containers Docker...${NC}"
docker-compose up -d

echo -e "${GREEN}Setup concluído!${NC}"
echo -e "${GREEN}Frontend: http://localhost:3000${NC}"
echo -e "${GREEN}Backend GraphQL Playground: http://localhost:4000/graphql${NC}" 