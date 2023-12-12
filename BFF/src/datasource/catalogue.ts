// import protoLoader, { load } from '@grpc/proto-loader';
import { credentials } from '@grpc/grpc-js';
import DataLoader from 'dataloader';
import { CatalogueClient } from '../../generated/catalogue_grpc_pb.js';
import { GetBookRequest, GetBookResponse, ListBooksResponse } from '../../generated/catalogue_pb.js';
import { Empty } from "google-protobuf/google/protobuf/empty_pb"

// const ProtoPath = './proto/catalogue.proto';
// const packageDefinition = protoLoader.loadSync(ProtoPath);
// const catalogue_proto = grpc.loadPackageDefinition(packageDefinition).book;

// const clientUri = process.env.CATALOGUE_CLIENT_URI || 'localhost:50051';
const clientUri = 'localhost:50051';
console.log(clientUri);

// const client = new catalogue_proto.Catalogue(clientUri, grpc.credentials.createInsecure());
const client: CatalogueClient = new CatalogueClient(clientUri, credentials.createInsecure());

type Book = {
    id: number;
    title: string;
    author: string;
    price: number;
}

// DataSourceクラスの作成
export class CatalogueDataSource {
    private client: CatalogueClient;
    private token: string;
    private book: Book;
    private bookList: Array<Book>;

    constructor(options: { token: string } = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }

    // DataLoaderの作成
    // private bookLoader = new DataLoader(async (ids: Array<number>) => {
    //     console.log('bookLoader');
    //     const bookList = await this.listBooks();

    //     const bookIdToBookMap = bookList.reduce((mapping: { [id: number]: Book }, book: Book) => {
    //         mapping[book.id] = book;
    //         return mapping;
    //     }, {});

    //     this.bookList = bookList;

    //     return ids.map(id => bookIdToBookMap[id]);
    // })

    // async getBook(id: number) {
    //     console.log('getBook');
    //     const book = await this.bookLoader.load(id);
    //     return book;
    // }

    async getBook(id: number) {
        console.log('getBook');
        return new Promise<Book>((resolve, reject) => {
            const request = new GetBookRequest();
            request.setId(id);
            this.client.getBook(request, (err: any, response: GetBookResponse) => {
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
        const empty = new Empty();
        return new Promise<Book[]>((resolve, reject) => {
            this.client.listBooks(empty, (err: any, response: ListBooksResponse) => {
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
