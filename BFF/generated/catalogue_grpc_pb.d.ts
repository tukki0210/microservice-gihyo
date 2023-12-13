// GENERATED CODE -- DO NOT EDIT!

// package: book
// file: catalogue.proto

import * as catalogue_pb from "./catalogue_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface ICatalogueService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getBook: grpc.MethodDefinition<catalogue_pb.GetBookRequest, catalogue_pb.GetBookResponse>;
  listBooks: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, catalogue_pb.ListBooksResponse>;
}

export const CatalogueService: ICatalogueService;

export interface ICatalogueServer extends grpc.UntypedServiceImplementation {
  getBook: grpc.handleUnaryCall<catalogue_pb.GetBookRequest, catalogue_pb.GetBookResponse>;
  listBooks: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, catalogue_pb.ListBooksResponse>;
}

export class CatalogueClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getBook(argument: catalogue_pb.GetBookRequest, callback: grpc.requestCallback<catalogue_pb.GetBookResponse>): grpc.ClientUnaryCall;
  getBook(argument: catalogue_pb.GetBookRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<catalogue_pb.GetBookResponse>): grpc.ClientUnaryCall;
  getBook(argument: catalogue_pb.GetBookRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<catalogue_pb.GetBookResponse>): grpc.ClientUnaryCall;
  listBooks(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<catalogue_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<catalogue_pb.ListBooksResponse>): grpc.ClientUnaryCall;
  listBooks(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<catalogue_pb.ListBooksResponse>): grpc.ClientUnaryCall;
}
