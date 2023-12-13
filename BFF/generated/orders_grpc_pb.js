// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var orders_pb = require('./orders_pb.js');

function serialize_order_CreateOrderRequest(arg) {
  if (!(arg instanceof orders_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type order.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderRequest(buffer_arg) {
  return orders_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CreateOrderResponse(arg) {
  if (!(arg instanceof orders_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type order.CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderResponse(buffer_arg) {
  return orders_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_GetOrderRequest(arg) {
  if (!(arg instanceof orders_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type order.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_GetOrderRequest(buffer_arg) {
  return orders_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_GetOrderResponse(arg) {
  if (!(arg instanceof orders_pb.GetOrderResponse)) {
    throw new Error('Expected argument of type order.GetOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_GetOrderResponse(buffer_arg) {
  return orders_pb.GetOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ListOrdersRequest(arg) {
  if (!(arg instanceof orders_pb.ListOrdersRequest)) {
    throw new Error('Expected argument of type order.ListOrdersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ListOrdersRequest(buffer_arg) {
  return orders_pb.ListOrdersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_ListOrdersResponse(arg) {
  if (!(arg instanceof orders_pb.ListOrdersResponse)) {
    throw new Error('Expected argument of type order.ListOrdersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_ListOrdersResponse(buffer_arg) {
  return orders_pb.ListOrdersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  getOrder: {
    path: '/order.OrderService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.GetOrderRequest,
    responseType: orders_pb.GetOrderResponse,
    requestSerialize: serialize_order_GetOrderRequest,
    requestDeserialize: deserialize_order_GetOrderRequest,
    responseSerialize: serialize_order_GetOrderResponse,
    responseDeserialize: deserialize_order_GetOrderResponse,
  },
  listOrders: {
    path: '/order.OrderService/ListOrders',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.ListOrdersRequest,
    responseType: orders_pb.ListOrdersResponse,
    requestSerialize: serialize_order_ListOrdersRequest,
    requestDeserialize: deserialize_order_ListOrdersRequest,
    responseSerialize: serialize_order_ListOrdersResponse,
    responseDeserialize: deserialize_order_ListOrdersResponse,
  },
  createOrder: {
    path: '/order.OrderService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: orders_pb.CreateOrderRequest,
    responseType: orders_pb.CreateOrderResponse,
    requestSerialize: serialize_order_CreateOrderRequest,
    requestDeserialize: deserialize_order_CreateOrderRequest,
    responseSerialize: serialize_order_CreateOrderResponse,
    responseDeserialize: deserialize_order_CreateOrderResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
