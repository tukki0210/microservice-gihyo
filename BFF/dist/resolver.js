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
        }
    }
};
