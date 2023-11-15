import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolver.js";
import { CatalogueDataSource } from "./datasource/catalogue.js";


const app = express();

// expressサーバーへの受信リクエストを処理するhttpサーバーを作成
const httpServer = http.createServer(app);

// ApolloServer　初期化用の処理
const server = new ApolloServer({
    typeDefs,
    resolvers
});

await server.start();

// expressサーバーにApolloServerを適用
app.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    expressMiddleware(server , {
        context: async ({ req }) => {
            return {
                dataSources : {
                    catalogueApi: new CatalogueDataSource()
                }
            }
        }
    }),
);

app.listen(4000)

console.log(`🚀 Server ready at http://localhost:4000/graphql`);