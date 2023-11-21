export const resolvers = {
    Query: {
        book: async (parent, args, context) => {
            return await context.dataSources.catalogueApi.getBook(args.id);
        },
        books: async (parent, args, context) => {
            return await context.dataSources.catalogueApi.listBooks();
        
        }
    }
}
