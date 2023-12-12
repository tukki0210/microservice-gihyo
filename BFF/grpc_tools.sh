grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=esnext,binary:./generated \
--grpc_out=grpc_js:./generated \
--ts_out=service=grpc-node,mode=grpc-js:./generated \
-I ./proto \
./proto/*.proto
