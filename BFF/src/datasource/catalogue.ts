// import protoLoader, { load } from '@grpc/proto-loader';
import { credentials } from '@grpc/grpc-js';
import DataLoader from 'dataloader';
import { CatalogueClient } from '../../generated/catalogue_grpc_pb.js';
import { ListBooksResponse } from '../../generated/catalogue_pb.js';
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
    private books: Array<Book>;

    constructor(options: { token: string } = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }


    // DataLoaderの作成
    private bookLoader = new DataLoader(async (ids: Array<number>) => {
        const empty = new Empty();
        const bookList = await new Promise<Book[]>((resolve, reject) => {
            this.client.listBooks( empty , (err: any, response: ListBooksResponse) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                return response.getBooksList();
            });
        });

        const bookIdToBookMap = bookList.reduce((mapping: { [id: number]: Book }, book: Book) => {
            mapping[book.id] = book;
            return mapping;
        }, {});

        return ids.map(id => bookIdToBookMap[id]);

    })
    async getBook(id: number) {
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
