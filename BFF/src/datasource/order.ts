import { credentials, type ServiceError } from '@grpc/grpc-js'
import { OrderServiceClient } from '../generated/orders_grpc_pb.js'
import { CreateOrderRequest, type CreateOrderResponse, GetOrderRequest, type GetOrderResponse, ListOrdersRequest, type ListOrdersResponse, Order, type OrderItem } from '../generated/orders_pb.js'

const clientUri = process.env.ORDER_CLIENT_URI ?? 'localhost:50052'
console.log(clientUri)

const client: OrderServiceClient = new OrderServiceClient(clientUri, credentials.createInsecure())

// DataSourceクラスの作成
export class OrderDataSource {
    private readonly client: OrderServiceClient
    private readonly token: string

    constructor(options: { token: string } = { token: '' }) {
        this.client = client
        this.token = options.token
    }

    async getOrder(id: string): Promise<Order.AsObject> {
        return await new Promise<Order.AsObject>((resolve, reject) => {
            const request = new GetOrderRequest()
            request.setOrderid(id)
            this.client.getOrder(request, (err: ServiceError | null, response: GetOrderResponse) => {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (err) {
                    reject(err)
                }
                const order = response.getOrder()

                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (!order) {
                    reject(new Error('Order not found')); return
                }
                resolve(order.toObject())
            })
        })
    }

    async listOrders(customerId: string): Promise<Order.AsObject[]> {
        return await new Promise<Order.AsObject[]>((resolve, reject) => {
            const request = new ListOrdersRequest()
            request.setCustomerid(customerId)
            this.client.listOrders(request, (err: ServiceError | null, response: ListOrdersResponse) => {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (err) {
                    console.log(err)
                    reject(err); return
                }
                resolve(response.getOrdersList().map(order => {
                    const newOrder = new Order()
                    newOrder.setId(order.getId())
                    newOrder.setCustomerid(order.getCustomerid())
                    newOrder.setCustomername(order.getCustomername())
                    newOrder.setOrderitemList(order.getOrderitemList())
                    return newOrder.toObject()
                }))
            })
        })
    }

    async createOrder(input: { customerId: string, customerName: string, orderItem: OrderItem[] }): Promise<string> {
        const param = {
            customerId: input.customerId,
            customerName: input.customerName,
            orderItem: input.orderItem
        }
        return await new Promise<string>((resolve, reject) => {
            const request = new CreateOrderRequest()
            request.setCustomerid(param.customerId)
            request.setCustomername(param.customerName)
            request.setOrderitemList(param.orderItem)

            this.client.createOrder(request, (err: ServiceError | null, response: CreateOrderResponse) => {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (err) {
                    console.log(err)
                    reject(err)
                }
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                if (!response) {
                    reject(new Error('Response is null or undefined')); return
                }
                resolve(response.getOrderid()
                )
            })
        })
    }
}
