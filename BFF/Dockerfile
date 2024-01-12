# ビルドステージ
FROM node:20-alpine AS builder
WORKDIR /app

COPY package* ./
RUN npm install

COPY src ./src
COPY tsconfig.json ./
RUN npm run compile


# 本番用ステージ
FROM node:20-alpine AS production
WORKDIR /app

ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000

COPY package* ./
RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /app/dist ./dist

CMD [ "node", "./dist/index.js" ]