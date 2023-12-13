"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        book: async (parent, args, context) => {
            return await context.dataSources.catalogueApi.getBook(args.id);
        },
        books: async (parent, args, context) => {
            return await context.dataSources.catalogueApi.listBooks();
        },
        order: async (parent, args, context) => {
            const response = await context.dataSources.orderApi.getOrder(args.orderid);
            response.orderItem = await Promise.all(response.orderItem.map(async (order) => {
                const book = await context.dataSources.catalogueApi.getBook(order.itemId);
                return {
                    itemId: order.itemId,
                    title: book.title,
                    author: book.author,
                    quantity: order.quantity,
                    unitPrice: order.unitPrice
                };
            }));
            return response;
        },
        orders: async (parent, args, context) => {
            return await context.dataSources.orderApi.listOrders(args.customerId);
        },
    },
    Mutation: {
        createOrder: async (parent, args, context) => {
            return await context.dataSources.orderApi.createOrder(args.input);
        }
    }
};
