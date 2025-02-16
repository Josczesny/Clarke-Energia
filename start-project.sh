#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}Iniciando setup do projeto Clarke Energia...${NC}"

# Verificar dependências
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js não encontrado. Por favor, instale o Node.js${NC}"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker não encontrado. Por favor, instale o Docker${NC}"
    exit 1
fi

# Parar containers existentes
echo -e "${BLUE}Parando containers existentes...${NC}"
docker-compose down &> /dev/null

# Instalar dependências
echo -e "${BLUE}Instalando dependências...${NC}"
(cd backend && npm install) && (cd frontend && npm install)

# Configurar variáveis de ambiente
echo -e "${BLUE}Configurando variáveis de ambiente...${NC}"
echo "PORT=4000
NODE_ENV=development" > backend/.env

echo "REACT_APP_API_URL=http://localhost:4000/graphql" > frontend/.env

# Iniciar containers
echo -e "${BLUE}Iniciando containers Docker...${NC}"
docker-compose up -d

# Aguardar serviços iniciarem
echo -e "${BLUE}Aguardando serviços iniciarem...${NC}"
sleep 5

# Abrir navegador (funciona em Linux e Mac)
if [[ "$OSTYPE" == "darwin"* ]]; then
    open http://localhost:3000
    open http://localhost:4000/graphql
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open http://localhost:3000
    xdg-open http://localhost:4000/graphql
fi

echo -e "${GREEN}Setup concluído!${NC}"
echo -e "${GREEN}Frontend: http://localhost:3000${NC}"
echo -e "${GREEN}Backend GraphQL Playground: http://localhost:4000/graphql${NC}"

# Mostrar logs dos containers
docker-compose logs -f 