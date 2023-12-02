export type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
};

export type CartItem = {
    book: Book;
    quantity: number;
};
