FROM node:16 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
RUN yarn install
COPY public ./public
COPY src ./src
COPY index.html ./
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html