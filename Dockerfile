# Estágio de construção
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json* ./

# Instalar dependências
RUN npm ci

# Copiar todos os arquivos do projeto
COPY . .

# Construir o aplicativo
RUN npm run build

# Estágio de produção
FROM node:18-alpine AS runner

WORKDIR /app

# Definir variáveis de ambiente para produção
ENV NODE_ENV=production

# Copiar dependências e arquivos de build do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Expor a porta que o Next.js usa
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]

