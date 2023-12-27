'use strict';
var grpc = require('@grpc/grpc-js');
var catalogue_pb = require('./catalogue_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
function serialize_book_GetBookRequest(arg) {
    if (!(arg instanceof catalogue_pb.GetBookRequest)) {
        throw new Error('Expected argument of type book.GetBookRequest');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_book_GetBookRequest(buffer_arg) {
    return catalogue_pb.GetBookRequest.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_book_GetBookResponse(arg) {
    if (!(arg instanceof catalogue_pb.GetBookResponse)) {
        throw new Error('Expected argument of type book.GetBookResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_book_GetBookResponse(buffer_arg) {
    return catalogue_pb.GetBookResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_book_ListBooksResponse(arg) {
    if (!(arg instanceof catalogue_pb.ListBooksResponse)) {
        throw new Error('Expected argument of type book.ListBooksResponse');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_book_ListBooksResponse(buffer_arg) {
    return catalogue_pb.ListBooksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}
function serialize_google_protobuf_Empty(arg) {
    if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
        throw new Error('Expected argument of type google.protobuf.Empty');
    }
    return Buffer.from(arg.serializeBinary());
}
function deserialize_google_protobuf_Empty(buffer_arg) {
    return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}
var CatalogueService = exports.CatalogueService = {
    getBook: {
        path: '/book.Catalogue/GetBook',
        requestStream: false,
        responseStream: false,
        requestType: catalogue_pb.GetBookRequest,
        responseType: catalogue_pb.GetBookResponse,
        requestSerialize: serialize_book_GetBookRequest,
        requestDeserialize: deserialize_book_GetBookRequest,
        responseSerialize: serialize_book_GetBookResponse,
        responseDeserialize: deserialize_book_GetBookResponse,
    },
    listBooks: {
        path: '/book.Catalogue/ListBooks',
        requestStream: false,
        responseStream: false,
        requestType: google_protobuf_empty_pb.Empty,
        responseType: catalogue_pb.ListBooksResponse,
        requestSerialize: serialize_google_protobuf_Empty,
        requestDeserialize: deserialize_google_protobuf_Empty,
        responseSerialize: serialize_book_ListBooksResponse,
        responseDeserialize: deserialize_book_ListBooksResponse,
    },
};
exports.CatalogueClient = grpc.makeGenericClientConstructor(CatalogueService);
