"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueDataSource = void 0;
// import protoLoader, { load } from '@grpc/proto-loader';
const grpc_js_1 = require("@grpc/grpc-js");
const dataloader_1 = __importDefault(require("dataloader"));
const catalogue_grpc_pb_js_1 = require("../../generated/catalogue_grpc_pb.js");
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
// const ProtoPath = './proto/catalogue.proto';
// const packageDefinition = protoLoader.loadSync(ProtoPath);
// const catalogue_proto = grpc.loadPackageDefinition(packageDefinition).book;
// const clientUri = process.env.CATALOGUE_CLIENT_URI || 'localhost:50051';
const clientUri = 'localhost:50051';
console.log(clientUri);
// const client = new catalogue_proto.Catalogue(clientUri, grpc.credentials.createInsecure());
const client = new catalogue_grpc_pb_js_1.CatalogueClient(clientUri, grpc_js_1.credentials.createInsecure());
// DataSourceクラスの作成
class CatalogueDataSource {
    client;
    token;
    book;
    books;
    constructor(options = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }
    // DataLoaderの作成
    bookLoader = new dataloader_1.default(async (ids) => {
        const empty = new empty_pb_1.Empty();
        const bookList = await new Promise((resolve, reject) => {
            this.client.listBooks(empty, (err, response) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                return response.getBooksList();
            });
        });
        const bookIdToBookMap = bookList.reduce((mapping, book) => {
            mapping[book.id] = book;
            return mapping;
        }, {});
        return ids.map(id => bookIdToBookMap[id]);
    });
    async getBook(id) {
        // this.book = await this.client.getBook({ id: id }, (err: any, response: { book: Book; }) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     return response.book;
        // })
        // return this.book;
        return this.bookLoader.load(id);
    }
}
exports.CatalogueDataSource = CatalogueDataSource;
