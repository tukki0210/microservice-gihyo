// import { readFileSync } from 'fs'

// export const typeDefs = readFileSync('../../BFF/schema.graphqls', { encoding: 'utf-8' })

export const typeDefs = `#graphql
type Book {
    id: Int,
    title: String,
    author: String,
    price: Int
}

type Order {
    id: String,
    customerId: String,
    customerName: String,
    orderItem: [OrderItem],
}

type OrderItem {
    itemId : Int,
    title: String,
    author: String,
    quantity: Int,
    unitPrice: Int,
}

type Query {
    book(id: Int): Book
    books: [Book]
    order(orderid: String): Order
    orders(customerId: String): [Order]
}

input OrderInput {
    customerId: String,
    customerName: String,
    orderItem: [OrderItemInput],
}

input OrderItemInput {
    itemId : Int,
    quantity: Int,
    unitPrice: Int,
}

type Mutation {
    createOrder(input: OrderInput): String
    # updateOrder(order: OrderInput): Order
    # deleteOrder(orderId: String): Order
}`
