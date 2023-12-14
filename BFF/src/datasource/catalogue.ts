// import protoLoader, { load } from '@grpc/proto-loader';
import { credentials, type ServiceError } from '@grpc/grpc-js'
// import DataLoader from 'dataloader'
import { CatalogueClient } from '../../generated/catalogue_grpc_pb.js'
import { Book, GetBookRequest, type GetBookResponse, type ListBooksResponse } from '../../generated/catalogue_pb.js'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

// const ProtoPath = './proto/catalogue.proto';
// const packageDefinition = protoLoader.loadSync(ProtoPath);
// const catalogue_proto = grpc.loadPackageDefinition(packageDefinition).book;

const clientUri = process.env.CATALOGUE_CLIENT_URI ?? 'localhost:50051'
console.log(clientUri)

const client: CatalogueClient = new CatalogueClient(clientUri, credentials.createInsecure())

// DataSourceクラスの作成
export class CatalogueDataSource {
    private readonly client: CatalogueClient
    private readonly token: string

    constructor(options: { token: string } = { token: '' }) {
        this.client = client
        this.token = options.token
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

    async getBook(id: number): Promise<Book> {
        console.log('getBook')
        return await new Promise<Book>((resolve, reject) => {
            const request = new GetBookRequest()
            request.setId(id)
            this.client.getBook(request, (err: ServiceError | null, response: GetBookResponse) => {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (err) {
                    reject(err); return
                }
                const book = response.getBook()

                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (!book) {
                    reject(new Error('Book not found')); return
                }
                const newBook = new Book()
                newBook.setId(book.getId())
                newBook.setTitle(book.getTitle())
                newBook.setAuthor(book.getAuthor())
                newBook.setPrice(book.getPrice())

                resolve(newBook)
            })
        })
    }

    async listBooks(): Promise<Book[]> {
        console.log('listBooks')
        const empty = new Empty()
        return await new Promise<Book[]>((resolve, reject) => {
            this.client.listBooks(empty, (err: ServiceError | null, response: ListBooksResponse) => {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (err) {
                    console.log(err)
                    reject(err); return
                }
                resolve(response.getBooksList().map(book => {
                    const newBook = new Book()
                    newBook.setId(book.getId())
                    newBook.setTitle(book.getTitle())
                    newBook.setAuthor(book.getAuthor())
                    newBook.setPrice(book.getPrice())
                    return newBook
                }))
            })
        })
    }
}
