"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueDataSource = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const catalogue_grpc_pb_js_1 = require("../generated/catalogue_grpc_pb.js");
const catalogue_pb_js_1 = require("../generated/catalogue_pb.js");
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const clientUri = process.env.CATALOGUE_CLIENT_URI ?? 'localhost:50051';
console.log(clientUri);
const client = new catalogue_grpc_pb_js_1.CatalogueClient(clientUri, grpc_js_1.credentials.createInsecure());
class CatalogueDataSource {
    client;
    token;
    constructor(options = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }
    async getBook(id) {
        console.log('getBook');
        return await new Promise((resolve, reject) => {
            const request = new catalogue_pb_js_1.GetBookRequest();
            request.setId(id);
            this.client.getBook(request, (err, response) => {
                if (err) {
                    reject(err);
                    return;
                }
                const book = response.getBook();
                if (!book) {
                    reject(new Error('Book not found'));
                    return;
                }
                resolve(book.toObject());
            });
        });
    }
    async listBooks() {
        console.log('listBooks');
        const empty = new empty_pb_1.Empty();
        return await new Promise((resolve, reject) => {
            this.client.listBooks(empty, (err, response) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(response.getBooksList().map(book => {
                    const newBook = new catalogue_pb_js_1.Book();
                    newBook.setId(book.getId());
                    newBook.setTitle(book.getTitle());
                    newBook.setAuthor(book.getAuthor());
                    newBook.setPrice(book.getPrice());
                    return newBook.toObject();
                }));
            });
        });
    }
}
exports.CatalogueDataSource = CatalogueDataSource;
