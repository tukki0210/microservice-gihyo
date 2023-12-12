"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
// import http from "http";
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const schema_js_1 = require("./schema.js");
const resolver_js_1 = require("./resolver.js");
const catalogue_js_1 = require("./datasource/catalogue.js");
const app = (0, express_1.default)();
// ApolloServer　初期化用の処理
const server = new server_1.ApolloServer({
    typeDefs: schema_js_1.typeDefs,
    resolvers: resolver_js_1.resolvers
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
(async () => {
    await server.start();
    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use('/graphql', (0, cors_1.default)(), body_parser_1.default.json(), 
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => {
            return {
                dataSources: {
                    catalogueApi: new catalogue_js_1.CatalogueDataSource()
                }
            };
        }
    }));
    app.listen(4000);
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
})();
