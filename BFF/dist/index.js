"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const schema_js_1 = require("./schema.js");
const resolver_js_1 = require("./resolver.js");
const catalogue_js_1 = require("./datasource/catalogue.js");
const order_js_1 = require("./datasource/order.js");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const app = (0, express_1.default)();
const httpServer = http_1.default.createServer(app);
const server = new server_1.ApolloServer({
    typeDefs: schema_js_1.typeDefs,
    resolvers: resolver_js_1.resolvers,
    plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })]
});
void (async () => {
    await server.start();
    app.use('/graphql', (0, cors_1.default)(), body_parser_1.default.json(), (0, express4_1.expressMiddleware)(server, {
        context: async () => {
            return {
                dataSources: {
                    catalogueApi: new catalogue_js_1.CatalogueDataSource(),
                    orderApi: new order_js_1.OrderDataSource()
                }
            };
        }
    }));
    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log('🚀 Server ready at http://localhost:4000/graphql');
    app.get('/health', (req, res) => {
        res.status(200).send('OK');
    });
})();
