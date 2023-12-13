import { credentials } from '@grpc/grpc-js';
import { OrderServiceClient } from '../../generated/orders_grpc_pb.js';
import { CreateOrderRequest, CreateOrderResponse, GetOrderRequest, GetOrderResponse, ListOrdersRequest, ListOrdersResponse, Order } from '../../generated/orders_pb.js'


const clientUri = process.env.CATALOGUE_CLIENT_URI || 'localhost:50052';
console.log(clientUri);

const client: OrderServiceClient = new OrderServiceClient(clientUri, credentials.createInsecure());


// DataSourceクラスの作成
export class OrderDataSource {
    private client: OrderServiceClient;
    private token: string;

    constructor(options: { token: string } = { token: '' }) {
        this.client = client;
        this.token = options.token;
    }

    async getOrder(id: string) {
        console.log('getOrder');
        return new Promise<Order>((resolve, reject) => {
            const request = new GetOrderRequest();
            request.setOrderid(id);
            this.client.getOrder(request, (err: any, response: GetOrderResponse) => {
                if (err) {
                    return reject(err);
                }
                const newOrder = new Order();
                newOrder.setId(response.getOrder().getId());
                newOrder.setCustomerid(response.getOrder().getCustomerid());
                newOrder.setCustomername(response.getOrder().getCustomername());
                newOrder.setOrderitemList(response.getOrder().getOrderitemList());
                return resolve(newOrder);
            });
        });
    }

    async listOrders(customerId: string) {
        console.log('listOrders');
        return new Promise<Order[]>((resolve, reject) => {
            const request = new ListOrdersRequest();
            request.setCustomerid(customerId);
            this.client.listOrders(request, (err: any, response: ListOrdersResponse) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                return resolve(response.getOrdersList().map(order => {
                    const newOrder = new Order();
                    newOrder.setId(order.getId());
                    newOrder.setCustomerid(order.getCustomerid());
                    newOrder.setCustomername(order.getCustomername());
                    newOrder.setOrderitemList(order.getOrderitemList());
                    return newOrder;
                }));
            });
        });
    }

    async createOrder(input) {
        const param = {
            customerId: input.customerId,
            customerName: input.customerName,
            orderItem: input.orderItem
        }
        return new Promise((resolve, reject) => {
            const request = new CreateOrderRequest();
            request.setCustomerid(param.customerId);
            request.setCustomername(param.customerName);
            request.setOrderitemList(param.orderItem);

            this.client.createOrder(request, (err: any, response: CreateOrderResponse) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                } else {
                    console.log(response);
                    return resolve(response);
                }
            })
        })
    }
}
