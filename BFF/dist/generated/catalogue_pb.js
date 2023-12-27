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
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.book.Book', null, global);
goog.exportSymbol('proto.book.GetBookRequest', null, global);
goog.exportSymbol('proto.book.GetBookResponse', null, global);
goog.exportSymbol('proto.book.ListBooksResponse', null, global);
proto.book.GetBookRequest = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.book.GetBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.book.GetBookRequest.displayName = 'proto.book.GetBookRequest';
}
proto.book.GetBookResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.book.GetBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.book.GetBookResponse.displayName = 'proto.book.GetBookResponse';
}
proto.book.ListBooksResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.book.ListBooksResponse.repeatedFields_, null);
};
goog.inherits(proto.book.ListBooksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.book.ListBooksResponse.displayName = 'proto.book.ListBooksResponse';
}
proto.book.Book = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.book.Book, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.book.Book.displayName = 'proto.book.Book';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.book.GetBookRequest.prototype.toObject = function (opt_includeInstance) {
        return proto.book.GetBookRequest.toObject(opt_includeInstance, this);
    };
    proto.book.GetBookRequest.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.book.GetBookRequest.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.book.GetBookRequest;
    return proto.book.GetBookRequest.deserializeBinaryFromReader(msg, reader);
};
proto.book.GetBookRequest.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readInt32());
                msg.setId(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.book.GetBookRequest.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.book.GetBookRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.book.GetBookRequest.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
};
proto.book.GetBookRequest.prototype.getId = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.book.GetBookRequest.prototype.setId = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.book.GetBookResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.book.GetBookResponse.toObject(opt_includeInstance, this);
    };
    proto.book.GetBookResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            book: (f = msg.getBook()) && proto.book.Book.toObject(includeInstance, f)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.book.GetBookResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.book.GetBookResponse;
    return proto.book.GetBookResponse.deserializeBinaryFromReader(msg, reader);
};
proto.book.GetBookResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.book.Book;
                reader.readMessage(value, proto.book.Book.deserializeBinaryFromReader);
                msg.setBook(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.book.GetBookResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.book.GetBookResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.book.GetBookResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getBook();
    if (f != null) {
        writer.writeMessage(1, f, proto.book.Book.serializeBinaryToWriter);
    }
};
proto.book.GetBookResponse.prototype.getBook = function () {
    return (jspb.Message.getWrapperField(this, proto.book.Book, 1));
};
proto.book.GetBookResponse.prototype.setBook = function (value) {
    return jspb.Message.setWrapperField(this, 1, value);
};
proto.book.GetBookResponse.prototype.clearBook = function () {
    return this.setBook(undefined);
};
proto.book.GetBookResponse.prototype.hasBook = function () {
    return jspb.Message.getField(this, 1) != null;
};
proto.book.ListBooksResponse.repeatedFields_ = [1];
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.book.ListBooksResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.book.ListBooksResponse.toObject(opt_includeInstance, this);
    };
    proto.book.ListBooksResponse.toObject = function (includeInstance, msg) {
        var f, obj = {
            booksList: jspb.Message.toObjectList(msg.getBooksList(), proto.book.Book.toObject, includeInstance)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.book.ListBooksResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.book.ListBooksResponse;
    return proto.book.ListBooksResponse.deserializeBinaryFromReader(msg, reader);
};
proto.book.ListBooksResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.book.Book;
                reader.readMessage(value, proto.book.Book.deserializeBinaryFromReader);
                msg.addBooks(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.book.ListBooksResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.book.ListBooksResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.book.ListBooksResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getBooksList();
    if (f.length > 0) {
        writer.writeRepeatedMessage(1, f, proto.book.Book.serializeBinaryToWriter);
    }
};
proto.book.ListBooksResponse.prototype.getBooksList = function () {
    return (jspb.Message.getRepeatedWrapperField(this, proto.book.Book, 1));
};
proto.book.ListBooksResponse.prototype.setBooksList = function (value) {
    return jspb.Message.setRepeatedWrapperField(this, 1, value);
};
proto.book.ListBooksResponse.prototype.addBooks = function (opt_value, opt_index) {
    return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.book.Book, opt_index);
};
proto.book.ListBooksResponse.prototype.clearBooksList = function () {
    return this.setBooksList([]);
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    proto.book.Book.prototype.toObject = function (opt_includeInstance) {
        return proto.book.Book.toObject(opt_includeInstance, this);
    };
    proto.book.Book.toObject = function (includeInstance, msg) {
        var f, obj = {
            id: jspb.Message.getFieldWithDefault(msg, 1, 0),
            title: jspb.Message.getFieldWithDefault(msg, 2, ""),
            author: jspb.Message.getFieldWithDefault(msg, 3, ""),
            price: jspb.Message.getFieldWithDefault(msg, 4, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
proto.book.Book.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.book.Book;
    return proto.book.Book.deserializeBinaryFromReader(msg, reader);
};
proto.book.Book.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readInt32());
                msg.setId(value);
                break;
            case 2:
                var value = (reader.readString());
                msg.setTitle(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setAuthor(value);
                break;
            case 4:
                var value = (reader.readInt32());
                msg.setPrice(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
proto.book.Book.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.book.Book.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
proto.book.Book.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getId();
    if (f !== 0) {
        writer.writeInt32(1, f);
    }
    f = message.getTitle();
    if (f.length > 0) {
        writer.writeString(2, f);
    }
    f = message.getAuthor();
    if (f.length > 0) {
        writer.writeString(3, f);
    }
    f = message.getPrice();
    if (f !== 0) {
        writer.writeInt32(4, f);
    }
};
proto.book.Book.prototype.getId = function () {
    return (jspb.Message.getFieldWithDefault(this, 1, 0));
};
proto.book.Book.prototype.setId = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value);
};
proto.book.Book.prototype.getTitle = function () {
    return (jspb.Message.getFieldWithDefault(this, 2, ""));
};
proto.book.Book.prototype.setTitle = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};
proto.book.Book.prototype.getAuthor = function () {
    return (jspb.Message.getFieldWithDefault(this, 3, ""));
};
proto.book.Book.prototype.setAuthor = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
};
proto.book.Book.prototype.getPrice = function () {
    return (jspb.Message.getFieldWithDefault(this, 4, 0));
};
proto.book.Book.prototype.setPrice = function (value) {
    return jspb.Message.setProto3IntField(this, 4, value);
};
goog.object.extend(exports, proto.book);
