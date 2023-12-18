"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDataSource = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const orders_grpc_pb_js_1 = require("../../generated/orders_grpc_pb.js");
const orders_pb_js_1 = require("../../generated/orders_pb.js");
const clientUri = process.env.CATALOGUE_CLIENT_URI ?? 'localhost:50052';
console.log(clientUri);
const client = new orders_grpc_pb_js_1.OrderServiceClient(clientUri, grpc_js_1.credentials.createInsecure());
class OrderDataSource {
    client;
    token;
    constructor(options = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }
    async getOrder(id) {
        console.log('getOrder');
        return await new Promise((resolve, reject) => {
            const request = new orders_pb_js_1.GetOrderRequest();
            request.setOrderid(id);
            this.client.getOrder(request, (err, response) => {
                if (err) {
                    reject(err);
                }
                const order = response.getOrder();
                if (!order) {
                    reject(new Error('Order not found'));
                    return;
                }
                resolve(order.toObject());
            });
        });
    }
    async listOrders(customerId) {
        console.log('listOrders');
        return await new Promise((resolve, reject) => {
            const request = new orders_pb_js_1.ListOrdersRequest();
            request.setCustomerid(customerId);
            this.client.listOrders(request, (err, response) => {
                if (err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                resolve(response.getOrdersList().map(order => {
                    const newOrder = new orders_pb_js_1.Order();
                    newOrder.setId(order.getId());
                    newOrder.setCustomerid(order.getCustomerid());
                    newOrder.setCustomername(order.getCustomername());
                    newOrder.setOrderitemList(order.getOrderitemList());
                    return newOrder.toObject();
                }));
            });
        });
    }
    async createOrder(input) {
        const param = {
            customerId: input.customerId,
            customerName: input.customerName,
            orderItem: input.orderItem
        };
        return await new Promise((resolve, reject) => {
            const request = new orders_pb_js_1.CreateOrderRequest();
            request.setCustomerid(param.customerId);
            request.setCustomername(param.customerName);
            request.setOrderitemList(param.orderItem);
            this.client.createOrder(request, (err, response) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                if (!response) {
                    reject(new Error('Response is null or undefined'));
                    return;
                }
                const order = new orders_pb_js_1.Order();
                order.setId(response.getOrderid());
                order.setCustomerid(request.getCustomerid());
                order.setCustomername(request.getCustomername());
                order.setOrderitemList(request.getOrderitemList());
                resolve(order.toObject());
            });
        });
    }
}
exports.OrderDataSource = OrderDataSource;
