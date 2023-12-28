import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import express from 'express'
import http from 'http'
import cors from 'cors'
import bodyParser from 'body-parser'
import { typeDefs } from './schema.js'
import { resolvers } from './resolver.js'
import { CatalogueDataSource } from './datasource/catalogue.js'
import { OrderDataSource } from './datasource/order.js'

const app = express()

// expressサーバーへの受信リクエストを処理するhttpサーバーを作成
const httpServer = http.createServer(app)

interface Context {
    dataSources: {
        catalogueApi: CatalogueDataSource
        orderApi: OrderDataSource
    }
}
// ApolloServer 初期化用の処理
const server = new ApolloServer<Context>({
    typeDefs,
    resolvers
    // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`

void (async () => {
    await server.start()

    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use(
        '/graphql',
        cors<cors.CorsRequest>(),
        bodyParser.json(),
        // expressMiddleware accepts the same arguments:
        // an Apollo Server instance and optional configuration options
        expressMiddleware(server, {
            // eslint-disable-next-line @typescript-eslint/require-await
            context: async () => {
                return {
                    dataSources: {
                        catalogueApi: new CatalogueDataSource(),
                        orderApi: new OrderDataSource()
                    }
                }
            }
        })
    )
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))

    console.log('🚀 Server ready at http://localhost:4000/graphql')

    app.get('/health', (req, res) => {
        res.status(200).send('OK')
    })
})()
