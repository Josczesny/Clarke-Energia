@echo off
echo Iniciando setup do projeto Clarke Energia...

REM Verificar se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js nao encontrado. Por favor, instale o Node.js
    exit /b 1
)

REM Verificar se Docker está instalado
where docker >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Docker nao encontrado. Por favor, instale o Docker
    exit /b 1
)

REM Instalar dependências do backend
echo Instalando dependencias do backend...
cd backend
call npm install

REM Instalar dependências do frontend
echo Instalando dependencias do frontend...
cd ../frontend
call npm install

REM Voltar para a raiz
cd ..

REM Criar arquivos .env
echo Configurando variaveis de ambiente...

echo PORT=4000> backend/.env
echo NODE_ENV=development>> backend/.env

echo REACT_APP_API_URL=http://localhost:4000/graphql> frontend/.env

REM Iniciar containers Docker
echo Iniciando containers Docker...
docker-compose up -d

echo Setup concluido!
echo Frontend: http://localhost:3000
echo Backend GraphQL Playground: http://localhost:4000/graphql

REM Abrir o navegador automaticamente
start http://localhost:3000
start http://localhost:4000/graphql 