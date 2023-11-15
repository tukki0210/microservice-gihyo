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

// const books = [
//     {
//         id: 1,
//         title: "The Awakening",
//         author: "Kate Chopin",
//         price: 1000
//     },
// ]