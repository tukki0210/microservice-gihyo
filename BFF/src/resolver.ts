type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
}

export const resolvers = {
    Query: {
        book: async (parent: any , args: { id: any; }, context: { dataSources: { catalogueApi: { getBook: (arg0: number) => Promise<Book>; }; }; }) => {
            return await context.dataSources.catalogueApi.getBook(args.id);
        },
        books: async (parent: any, args: any, context: { dataSources: { catalogueApi: { listBooks: () => Promise<Book[]>; }; }; }) => {
            return await context.dataSources.catalogueApi.listBooks();
        
        }
    }
}
