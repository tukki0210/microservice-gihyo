// import protoLoader from '@grpc/proto-loader';
// import grpc from '@grpc/grpc-js';

// const ProtoPath = './proto/order.proto';
// const packageDefinition = protoLoader.loadSync(ProtoPath);
// const order_proto = grpc.loadPackageDefinition(packageDefinition).order;

// const clientUri = process.env.ORDER_CLIENT_URI  || 'localhost:50052';
// console.log(clientUri);

// const client = new order_proto.OrderService(
//     clientUri, grpc.credentials.createInsecure()
// );

