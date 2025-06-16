# Estágio de construção
FROM node:21-alpine as build

WORKDIR /app

# Instalar dependências com npm
COPY package*.json ./
RUN npm install

# Copiar o código e construir o projeto
COPY . .
RUN npm run build

# Estágio de execução
FROM node:21-alpine

WORKDIR /app

# Copiar arquivos necessários do estágio de build
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expor porta e iniciar a aplicação
EXPOSE 3000

CMD ["npm", "start"]