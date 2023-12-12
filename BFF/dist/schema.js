"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql

type Book {
    id: Int,
    title: String,
    author: String,
    price: Int
}

type Query {
    book(id: Int): Book
    books: [Book]
}
`;
