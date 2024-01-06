package order

import (
	"context"
	"gihyo/order/domain/model"
	"gihyo/order/domain/repository"
)

type CreateOrderParams struct {
	CustomerId string
	CustomerName string
	OrderItem []model.OrderItem
}

type CreateOrder func(ctx context.Context, params CreateOrderParams)(string, error)	

// リポジトリを受け取り、CreateOrder関数（クロージャ）を返すファクトリ関数
// 依存性の注入（DI）を実現するための関数

func NewCreateOrder(orderRepository repository.OrderRepository, eventRepository repository.EventRepository) CreateOrder {
	return func(ctx context.Context, params CreateOrderParams) (string, error) {
		orderId, err := orderRepository.CreateOrder(ctx, params.CustomerId, params.CustomerName, params.OrderItem)
		if err != nil {
			return "", err
		}
		event := model.OrderEvent{
			ID: orderId,
			CustomerId: params.CustomerId,
			CustomerName: params.CustomerName,
			OrderItem: params.OrderItem,
		}
		err = eventRepository.PostOrderEvent(ctx, event)
		return orderId, err
	}
}