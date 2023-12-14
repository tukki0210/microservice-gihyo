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
            const order = await Promise.all(response.getOrderitemList().map(async (orderItem) => {
                const book = await context.dataSources.catalogueApi.getBook(orderItem.getItemid());
                return {
                    itemId: orderItem.getItemid(),
                    title: book.getTitle(),
                    author: book.getAuthor(),
                    quantity: orderItem.getQuantity(),
                    unitPrice: orderItem.getUnitprice()
                };
            }));
            return order;
        },
        orders: async (parent, args, context) => {
            return await context.dataSources.orderApi.listOrders(args.customerId);
        }
    },
    Mutation: {
        createOrder: async (parent, args, context) => {
            return await context.dataSources.orderApi.createOrder(args.input);
        }
    }
};
