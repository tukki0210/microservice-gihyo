protoc \
--go_out=. \
--go_opt=paths=source_relative \
--go-grpc_out=. \
--go-grpc_opt=paths=source_relative \
proto/book/catalogue.proto

# grpc_tools_node_protoc \
# --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
# --js_out=import_style=commonjs,binary:./src/generated \
# --grpc_out=grpc_js:./src/generated \
# --ts_out=service=grpc-node,mode=grpc-js:./src/generated \
# -I ./proto \
# ./proto/*.proto
