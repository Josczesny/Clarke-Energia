# Guia de Deploy

## Vercel

### Frontend
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `REACT_APP_API_URL`
3. Configure o build command:
   ```bash
   npm run build
   ```

### Backend
1. Crie um novo projeto na Vercel
2. Configure o root directory como `backend`
3. Configure as variáveis de ambiente:
   - `NODE_ENV=production`
4. Configure CORS para o domínio do frontend

## Monitoramento
1. Configure Sentry para rastreamento de erros
2. Implemente logging com Winston
3. Configure alertas de performance 