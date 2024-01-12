kind delete cluster
# docker build -t gihyo-ms-dev-book/fronetnd:0.1 frontend/
# docker build -t gihyo-ms-dev-book/bff:0.1 bff/
# docker build -t gihyo-ms-dev-book/catalogue:0.1 catalogue/
# docker build -t gihyo-ms-dev-book/order:0.1 order/
sh bookshop-demo/scripts/create_kind.sh 
sh bookshop-demo/scripts/deploy_all.sh 