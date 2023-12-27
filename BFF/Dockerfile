FROM node:16-alpine
WORKDIR /app
COPY package* ./
RUN npm install --production
COPY dist/index.js ./
COPY dist/resolver.js ./
COPY dist/schema.js ./
COPY dist/datasource ./datasource
COPY dist/generated ./generated

EXPOSE 4000
CMD [ "node", "index.js" ]