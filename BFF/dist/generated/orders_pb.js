var jspb = require('google-protobuf');
var goog = jspb;
var global = (function () {
    if (this) {
        return this;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    return Function('return this')();
}.call(null));
goog.exportSymbol('proto.order.CreateOrderRequest', null, global);
goog.exportSymbol('proto.order.CreateOrderResponse', null, global);
goog.exportSymbol('proto.order.GetOrderRequest', null, global);
goog.exportSymbol('proto.order.GetOrderResponse', null, global);
goog.exportSymbol('proto.order.ListOrdersRequest', null, global);
goog.exportSymbol('proto.order.ListOrdersResponse', null, global);
goog.exportSymbol('proto.order.Order', null, global);
goog.exportSymbol('proto.order.OrderItem', null, global);
proto.order.GetOrderRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.GetOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.GetOrderRequest.displayName = 'proto.order.GetOrderRequest';
}
proto.order.GetOrderResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.GetOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.GetOrderResponse.displayName = 'proto.order.GetOrderResponse';
}
proto.order.ListOrdersRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.ListOrdersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.ListOrdersRequest.displayName = 'proto.order.ListOrdersRequest';
}
proto.order.ListOrdersResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.order.ListOrdersResponse.repeatedFields_, null);
};
goog.inherits(proto.order.ListOrdersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.ListOrdersResponse.displayName = 'proto.order.ListOrdersResponse';
}
proto.order.CreateOrderRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.order.CreateOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.order.CreateOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.CreateOrderRequest.displayName = 'proto.order.CreateOrderRequest';
}
proto.order.CreateOrderResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.CreateOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.CreateOrderResponse.displayName = 'proto.order.CreateOrderResponse';
}
proto.order.Order = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.order.Order.repeatedFields_, null);
};
goog.inherits(proto.order.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.Order.displayName = 'proto.order.Order';
}
proto.order.OrderItem = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.order.OrderItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.order.OrderItem.displayName = 'proto.order.OrderItem';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.GetOrderRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.order.GetOrderRequest.toObject(opt_includeInstance, this);
    };
    proto.order.GetOrderRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            orderid: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.GetOrderRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.GetOrderRequest;
    return proto.order.GetOrderRequest.deserializeBinaryFromReader(msg, reader);
};
proto.order.GetOrderRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setOrderid(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.GetOrderRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.GetOrderRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.GetOrderRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOrderid();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
};
proto.order.GetOrderRequest.prototype.getOrderid = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.order.GetOrderRequest.prototype.setOrderid = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.GetOrderResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.order.GetOrderResponse.toObject(opt_includeInstance, this);
    };
    proto.order.GetOrderResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            order: (f = msg.getOrder()) && proto.order.Order.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.GetOrderResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.GetOrderResponse;
    return proto.order.GetOrderResponse.deserializeBinaryFromReader(msg, reader);
};
proto.order.GetOrderResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.order.Order;
                reader.readMessage(value, proto.order.Order.deserializeBinaryFromReader);
                msg.setOrder(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.GetOrderResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.GetOrderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.GetOrderResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOrder();
    if (f != null) {
        writer.writeMessage(1, f, proto.order.Order.serializeBinaryToWriter);
    }
};
proto.order.GetOrderResponse.prototype.getOrder = function () {
    return (jspb.Message.getWrapperField(this, proto.order.Order, 1));
};
proto.order.GetOrderResponse.prototype.setOrder = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.order.GetOrderResponse.prototype.clearOrder = function () {
    return this.setOrder(undefined);
};
proto.order.GetOrderResponse.prototype.hasOrder = function () {
    return jspb.Message.getField(this, 1) != null;
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.ListOrdersRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.order.ListOrdersRequest.toObject(opt_includeInstance, this);
    };
    proto.order.ListOrdersRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            customerid: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.ListOrdersRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.ListOrdersRequest;
    return proto.order.ListOrdersRequest.deserializeBinaryFromReader(msg, reader);
};
proto.order.ListOrdersRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setCustomerid(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.ListOrdersRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.ListOrdersRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.ListOrdersRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCustomerid();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
};
proto.order.ListOrdersRequest.prototype.getCustomerid = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.order.ListOrdersRequest.prototype.setCustomerid = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
proto.order.ListOrdersResponse.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.ListOrdersResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.order.ListOrdersResponse.toObject(opt_includeInstance, this);
    };
    proto.order.ListOrdersResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            ordersList: jspb.Message.toObjectList(msg.getOrdersList(), proto.order.Order.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.ListOrdersResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.ListOrdersResponse;
    return proto.order.ListOrdersResponse.deserializeBinaryFromReader(msg, reader);
};
proto.order.ListOrdersResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.order.Order;
                reader.readMessage(value, proto.order.Order.deserializeBinaryFromReader);
                msg.addOrders(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.ListOrdersResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.ListOrdersResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.ListOrdersResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOrdersList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.order.Order.serializeBinaryToWriter);
    }
};
proto.order.ListOrdersResponse.prototype.getOrdersList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.order.Order, 1));
};
proto.order.ListOrdersResponse.prototype.setOrdersList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
proto.order.ListOrdersResponse.prototype.addOrders = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.order.Order, opt_index);
};
proto.order.ListOrdersResponse.prototype.clearOrdersList = function () {
    return this.setOrdersList([]);
};
proto.order.CreateOrderRequest.repeatedFields_ = [3];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.CreateOrderRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.order.CreateOrderRequest.toObject(opt_includeInstance, this);
    };
    proto.order.CreateOrderRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            customerid: jspb.Message.getFieldWithDefault(msg, 1, ""),
            customername: jspb.Message.getFieldWithDefault(msg, 2, ""),
            orderitemList: jspb.Message.toObjectList(msg.getOrderitemList(), proto.order.OrderItem.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.CreateOrderRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.CreateOrderRequest;
    return proto.order.CreateOrderRequest.deserializeBinaryFromReader(msg, reader);
};
proto.order.CreateOrderRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setCustomerid(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setCustomername(value);
                break;
            case 3:
                var value = new proto.order.OrderItem;
                reader.readMessage(value, proto.order.OrderItem.deserializeBinaryFromReader);
                msg.addOrderitem(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.CreateOrderRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.CreateOrderRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.CreateOrderRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getCustomerid();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getCustomername();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getOrderitemList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(3, f, proto.order.OrderItem.serializeBinaryToWriter);
    }
};
proto.order.CreateOrderRequest.prototype.getCustomerid = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.order.CreateOrderRequest.prototype.setCustomerid = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
proto.order.CreateOrderRequest.prototype.getCustomername = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.order.CreateOrderRequest.prototype.setCustomername = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};
proto.order.CreateOrderRequest.prototype.getOrderitemList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.order.OrderItem, 3));
};
proto.order.CreateOrderRequest.prototype.setOrderitemList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 3, value);
};
proto.order.CreateOrderRequest.prototype.addOrderitem = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.order.OrderItem, opt_index);
};
proto.order.CreateOrderRequest.prototype.clearOrderitemList = function () {
    return this.setOrderitemList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.CreateOrderResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.order.CreateOrderResponse.toObject(opt_includeInstance, this);
    };
    proto.order.CreateOrderResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            orderid: jspb.Message.getFieldWithDefault(msg, 1, "")
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.CreateOrderResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.CreateOrderResponse;
    return proto.order.CreateOrderResponse.deserializeBinaryFromReader(msg, reader);
};
proto.order.CreateOrderResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setOrderid(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.CreateOrderResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.CreateOrderResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.CreateOrderResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOrderid();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
};
proto.order.CreateOrderResponse.prototype.getOrderid = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.order.CreateOrderResponse.prototype.setOrderid = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
proto.order.Order.repeatedFields_ = [4];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.Order.prototype.toObject = function (opt_includeInstance) {
        return proto.order.Order.toObject(opt_includeInstance, this);
    };
    proto.order.Order.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, ""),
            customerid: jspb.Message.getFieldWithDefault(msg, 2, ""),
            customername: jspb.Message.getFieldWithDefault(msg, 3, ""),
            orderitemList: jspb.Message.toObjectList(msg.getOrderitemList(), proto.order.OrderItem.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.Order.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.Order;
    return proto.order.Order.deserializeBinaryFromReader(msg, reader);
};
proto.order.Order.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setId(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setCustomerid(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setCustomername(value);
                break;
            case 4:
                var value = new proto.order.OrderItem;
                reader.readMessage(value, proto.order.OrderItem.deserializeBinaryFromReader);
                msg.addOrderitem(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.Order.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.Order.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.Order.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getCustomerid();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getCustomername();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getOrderitemList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(4, f, proto.order.OrderItem.serializeBinaryToWriter);
    }
};
proto.order.Order.prototype.getId = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, ""));
};
proto.order.Order.prototype.setId = function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
};
proto.order.Order.prototype.getCustomerid = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.order.Order.prototype.setCustomerid = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};
proto.order.Order.prototype.getCustomername = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, ""));
};
proto.order.Order.prototype.setCustomername = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
};
proto.order.Order.prototype.getOrderitemList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.order.OrderItem, 4));
};
proto.order.Order.prototype.setOrderitemList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 4, value);
};
proto.order.Order.prototype.addOrderitem = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.order.OrderItem, opt_index);
};
proto.order.Order.prototype.clearOrderitemList = function () {
    return this.setOrderitemList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.order.OrderItem.prototype.toObject = function (opt_includeInstance) {
        return proto.order.OrderItem.toObject(opt_includeInstance, this);
    };
    proto.order.OrderItem.toObject = function (includeInstance, msg) {
        var f, obj = {
            itemid: jspb.Message.getFieldWithDefault(msg, 1, 0),
            quantity: jspb.Message.getFieldWithDefault(msg, 2, 0),
            unitprice: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.order.OrderItem.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.order.OrderItem;
    return proto.order.OrderItem.deserializeBinaryFromReader(msg, reader);
};
proto.order.OrderItem.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readInt32());
                msg.setItemid(value);
                break;
            case 2:
                var value = (reader.readInt32());
                msg.setQuantity(value);
                break;
            case 3:
                var value = (reader.readInt32());
                msg.setUnitprice(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.order.OrderItem.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.order.OrderItem.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.order.OrderItem.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getItemid();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getQuantity();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
    f = message.getUnitprice();
    if (f !== 0) {
        writer.writeInt32(3, f);
    }
};
proto.order.OrderItem.prototype.getItemid = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.order.OrderItem.prototype.setItemid = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
proto.order.OrderItem.prototype.getQuantity = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, 0));
};
proto.order.OrderItem.prototype.setQuantity = function (value) {
    return jspb.Message.setProto3IntField(this, 2, value);
};
proto.order.OrderItem.prototype.getUnitprice = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, 0));
};
proto.order.OrderItem.prototype.setUnitprice = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};
goog.object.extend(exports, proto.order);
