type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
}

export const resolvers = {
    Query: {
        book: async (parent: any, args: { id: any; }, context: { dataSources: { catalogueApi: { getBook: (arg0: number) => Promise<Book>; }; }; }) => {
            return await context.dataSources.catalogueApi.getBook(args.id);
        },
        books: async (parent: any, args: any, context: { dataSources: { catalogueApi: { listBooks: () => Promise<Book[]>; }; }; }) => {
            return await context.dataSources.catalogueApi.listBooks();

        },
        order: async (parent: any, args: { orderid: any; }, context: {
            dataSources: {
                catalogueApi: any; orderApi: { getOrder: (arg0: string) => Promise<any>; },
            };
        }) => {
            const response = await context.dataSources.orderApi.getOrder(args.orderid);

            response.orderItem = await Promise.all(
                response.orderItem.map(async (order) => {
                    const book = await context.dataSources.catalogueApi.getBook(order.itemId);
                    return {
                        itemId: order.itemId,
                        title: book.title,
                        author: book.author,
                        quantity: order.quantity,
                        unitPrice: order.unitPrice
                    }
                })
            )
            return response;
        },
        orders: async (parent: any, args: { customerId: any; }, context: { dataSources: { orderApi: { listOrders: (arg0: string) => Promise<any>; }; }; }) => {
            return await context.dataSources.orderApi.listOrders(args.customerId);
        },
    },
    Mutation: {
        createOrder: async (parent, args: {
            input(input: any): unknown; order: any;
        }, context: { dataSources: { orderApi: { createOrder: (arg0: any) => Promise<any>; }; }; }) => {
            return await context.dataSources.orderApi.createOrder(args.input);
        }
    }
}
