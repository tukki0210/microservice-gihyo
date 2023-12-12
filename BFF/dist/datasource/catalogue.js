"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueDataSource = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const catalogue_grpc_pb_js_1 = require("../../generated/catalogue_grpc_pb.js");
const catalogue_pb_js_1 = require("../../generated/catalogue_pb.js");
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const clientUri = 'localhost:50051';
console.log(clientUri);
const client = new catalogue_grpc_pb_js_1.CatalogueClient(clientUri, grpc_js_1.credentials.createInsecure());
class CatalogueDataSource {
    client;
    token;
    book;
    bookList;
    constructor(options = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }
    async getBook(id) {
        console.log('getBook');
        return new Promise((resolve, reject) => {
            const request = new catalogue_pb_js_1.GetBookRequest();
            request.setId(id);
            this.client.getBook(request, (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve({
                    id: response.getBook().getId(),
                    title: response.getBook().getTitle(),
                    author: response.getBook().getAuthor(),
                    price: response.getBook().getPrice()
                });
            });
        });
    }
    async listBooks() {
        console.log('listBooks');
        const empty = new empty_pb_1.Empty();
        return new Promise((resolve, reject) => {
            this.client.listBooks(empty, (err, response) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                return resolve(response.getBooksList().map(book => ({
                    id: book.getId(),
                    title: book.getTitle(),
                    author: book.getAuthor(),
                    price: book.getPrice()
                })));
            });
        });
    }
}
exports.CatalogueDataSource = CatalogueDataSource;
