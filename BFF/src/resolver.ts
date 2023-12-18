import type { Book } from '../generated/catalogue_pb'
import type { CreateOrderRequest, Order, OrderItem } from '../generated/orders_pb'

export const resolvers = {
    Query: {
        book: async (parent: unknown, args: { id: number }, context: { dataSources: { catalogueApi: { getBook: (arg0: number) => Promise<Book> } } }) => {
            const book = await context.dataSources.catalogueApi.getBook(args.id)
            return book
        },
        books: async (parent: unknown, args: unknown, context: { dataSources: { catalogueApi: { listBooks: () => Promise<Book[]> } } }) => {
            const books = await context.dataSources.catalogueApi.listBooks()
            return books
        },
        order: async (parent: unknown, args: { orderid: string }, context: {
            dataSources: {
                catalogueApi: { getBook: (arg0: number) => Promise<Book> }
                orderApi: { getOrder: (arg0: string) => Promise<Order> }
            }
        }) => {
            const response = await context.dataSources.orderApi.getOrder(args.orderid)

            const order = await Promise.all(
                response.getOrderitemList().map(async (orderItem: OrderItem) => {
                    const book = await context.dataSources.catalogueApi.getBook(orderItem.getItemid())
                    return {
                        itemId: orderItem.getItemid(),
                        title: book.getTitle(),
                        author: book.getAuthor(),
                        quantity: orderItem.getQuantity(),
                        unitPrice: orderItem.getUnitprice()
                    }
                })
            )
            return order
        },
        orders: async (parent: unknown, args: { customerId: string }, context: { dataSources: { orderApi: { listOrders: (arg0: string) => Promise<Order[]> } } }) => {
            return await context.dataSources.orderApi.listOrders(args.customerId)
        }
    },
    Mutation: {
        createOrder: async (parent: unknown, args: {
            input: CreateOrderRequest
        }, context: { dataSources: { orderApi: { createOrder: (arg0: CreateOrderRequest) => Promise<Order> } } }) => {
            return await context.dataSources.orderApi.createOrder(args.input)
        }
    }
}
