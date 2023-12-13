// package: order
// file: orders.proto

import * as jspb from "google-protobuf";

export class GetOrderRequest extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderRequest): GetOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderRequest;
  static deserializeBinaryFromReader(message: GetOrderRequest, reader: jspb.BinaryReader): GetOrderRequest;
}

export namespace GetOrderRequest {
  export type AsObject = {
    orderid: string,
  }
}

export class GetOrderResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Order | undefined;
  setOrder(value?: Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrderResponse): GetOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrderResponse;
  static deserializeBinaryFromReader(message: GetOrderResponse, reader: jspb.BinaryReader): GetOrderResponse;
}

export namespace GetOrderResponse {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class ListOrdersRequest extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersRequest): ListOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersRequest;
  static deserializeBinaryFromReader(message: ListOrdersRequest, reader: jspb.BinaryReader): ListOrdersRequest;
}

export namespace ListOrdersRequest {
  export type AsObject = {
    customerid: string,
  }
}

export class ListOrdersResponse extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): void;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrdersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrdersResponse): ListOrdersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrdersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrdersResponse;
  static deserializeBinaryFromReader(message: ListOrdersResponse, reader: jspb.BinaryReader): ListOrdersResponse;
}

export namespace ListOrdersResponse {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

export class CreateOrderRequest extends jspb.Message {
  getCustomerid(): string;
  setCustomerid(value: string): void;

  getCustomername(): string;
  setCustomername(value: string): void;

  clearOrderitemList(): void;
  getOrderitemList(): Array<OrderItem>;
  setOrderitemList(value: Array<OrderItem>): void;
  addOrderitem(value?: OrderItem, index?: number): OrderItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
  static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
  export type AsObject = {
    customerid: string,
    customername: string,
    orderitemList: Array<OrderItem.AsObject>,
  }
}

export class CreateOrderResponse extends jspb.Message {
  getOrderid(): string;
  setOrderid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
  static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
  export type AsObject = {
    orderid: string,
  }
}

export class Order extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCustomerid(): string;
  setCustomerid(value: string): void;

  getCustomername(): string;
  setCustomername(value: string): void;

  clearOrderitemList(): void;
  getOrderitemList(): Array<OrderItem>;
  setOrderitemList(value: Array<OrderItem>): void;
  addOrderitem(value?: OrderItem, index?: number): OrderItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: string,
    customerid: string,
    customername: string,
    orderitemList: Array<OrderItem.AsObject>,
  }
}

export class OrderItem extends jspb.Message {
  getItemid(): number;
  setItemid(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getUnitprice(): number;
  setUnitprice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrderItem): OrderItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderItem;
  static deserializeBinaryFromReader(message: OrderItem, reader: jspb.BinaryReader): OrderItem;
}

export namespace OrderItem {
  export type AsObject = {
    itemid: number,
    quantity: number,
    unitprice: number,
  }
}

