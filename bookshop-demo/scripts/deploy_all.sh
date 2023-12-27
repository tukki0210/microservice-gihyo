#!/bin/bash
cd `dirname $0`
cd ..

kind load docker-image gihyo-ms-dev-book/frontend:0.1
kubectl apply -f frontend/k8s/frontend.yaml

kind load docker-image gihyo-ms-dev-book/bff:0.1
kubectl apply -f bff/k8s/bff.yaml

kind load docker-image gihyo-ms-dev-book/catalogue:0.1
kubectl apply -f catalogue/k8s/catalogue.yaml
kubectl apply -f catalogue/k8s/catalogue-db.yaml

kubectl apply -f order/k8s/order.yaml
kubectl apply -f order/k8s/order-db.yaml
kubectl apply -f shipping/k8s/shipping.yaml
kubectl apply -f rabbitmq/k8s/rabbitmq.yaml

echo "wait..."
kubectl wait --for=condition=ready pods --all --timeout=90s
echo "deploy done"