// GENERATED CODE -- DO NOT EDIT!

// package: order
// file: orders.proto

import * as orders_pb from "./orders_pb";
import * as grpc from "@grpc/grpc-js";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getOrder: grpc.MethodDefinition<orders_pb.GetOrderRequest, orders_pb.GetOrderResponse>;
  listOrders: grpc.MethodDefinition<orders_pb.ListOrdersRequest, orders_pb.ListOrdersResponse>;
  createOrder: grpc.MethodDefinition<orders_pb.CreateOrderRequest, orders_pb.CreateOrderResponse>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
  getOrder: grpc.handleUnaryCall<orders_pb.GetOrderRequest, orders_pb.GetOrderResponse>;
  listOrders: grpc.handleUnaryCall<orders_pb.ListOrdersRequest, orders_pb.ListOrdersResponse>;
  createOrder: grpc.handleUnaryCall<orders_pb.CreateOrderRequest, orders_pb.CreateOrderResponse>;
}

export class OrderServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getOrder(argument: orders_pb.GetOrderRequest, callback: grpc.requestCallback<orders_pb.GetOrderResponse>): grpc.ClientUnaryCall;
  getOrder(argument: orders_pb.GetOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrderResponse>): grpc.ClientUnaryCall;
  getOrder(argument: orders_pb.GetOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrderResponse>): grpc.ClientUnaryCall;
  listOrders(argument: orders_pb.ListOrdersRequest, callback: grpc.requestCallback<orders_pb.ListOrdersResponse>): grpc.ClientUnaryCall;
  listOrders(argument: orders_pb.ListOrdersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.ListOrdersResponse>): grpc.ClientUnaryCall;
  listOrders(argument: orders_pb.ListOrdersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.ListOrdersResponse>): grpc.ClientUnaryCall;
  createOrder(argument: orders_pb.CreateOrderRequest, callback: grpc.requestCallback<orders_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: orders_pb.CreateOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: orders_pb.CreateOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
}
