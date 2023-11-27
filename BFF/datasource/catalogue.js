import protoLoader from '@grpc/proto-loader';
import grpc from '@grpc/grpc-js';

const ProtoPath = './proto/catalogue.proto';
const packageDefinition = protoLoader.loadSync(ProtoPath);
const catalogue_proto = grpc.loadPackageDefinition(packageDefinition).book;

const clientUri = process.env.CATALOGUE_CLIENT_URI  || 'localhost:50051';
console.log(clientUri);

const client = new catalogue_proto.Catalogue(clientUri, grpc.credentials.createInsecure());

export class CatalogueDataSource {
    constructor(options) {
        this.client = client;
    }

    async getBook(id) {
        return new Promise((resolve, reject) => {
            this.client.getBook({ id: id }, (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(response.book);
            });
        }
        );
    }

    async listBooks() {
        return new Promise((resolve, reject) => {
            this.client.listBooks({}, (err, response) => {
                if (err) {
                    return reject(err);
                }
                return resolve(response.books);
            });
        }
        );
    }
}