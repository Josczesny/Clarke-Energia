@echo off
echo === Clarke Energia - Setup Inicial ===

REM Verificar Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERRO] Node.js nao encontrado. Instale em https://nodejs.org/
    pause
    exit /b 1
)

REM Limpar portas
echo [1/5] Limpando portas...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3000" ^| find "LISTENING"') do taskkill /f /pid %%a >nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| find ":4000" ^| find "LISTENING"') do taskkill /f /pid %%a >nul 2>&1

REM Setup Backend
echo [2/5] Instalando backend...
cd backend
call npm install
echo PORT=4000> .env
echo NODE_ENV=development>> .env
start cmd /k "title Backend && echo Iniciando backend... && npm run dev"

REM Setup Frontend
echo [3/5] Instalando frontend...
cd ../frontend
call npm install
echo REACT_APP_API_URL=http://localhost:4000/graphql> .env
start cmd /k "title Frontend && echo Iniciando frontend... && npm start"

cd ..

echo [4/5] Aguardando servidores iniciarem...
timeout /t 15 /nobreak

echo [5/5] Abrindo navegador...

REM Abrir URLs no navegador padrão
start http://localhost:3000
timeout /t 3 /nobreak
start http://localhost:4000/graphql

echo.
echo === Setup Concluido! ===
echo.
echo Frontend: http://localhost:3000
echo GraphQL: http://localhost:4000/graphql
echo.
echo Pressione qualquer tecla para sair...
pause >nul 