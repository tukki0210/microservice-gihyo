package repository

import (
	"context"
	"encoding/json"
	"time"
	"gihyo/order/domain/model"
	"gihyo/order/domain/repository"

	amqp "github.com/rabbitmq/amqp091-go"
)

type EventRepository struct {
	ch *amqp.Channel
}

func NewEventRepository(ch *amqp.Channel) repository.EventRepository {
	return &EventRepository{
		ch: ch,
	}
}

// インターフェースの実装
func (o *EventRepository) PostOrderEvent(ctx context.Context, orderEvent model.OrderEvent) error {
	q, err := o.ch.QueueDeclare(
		"order", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(ctx, 5*time.Second)
	defer cancel()

	
	body, err := json.Marshal(orderEvent)
	if err != nil {
		return err
	}
	// メッセージをキューにパブリッシュ
	err = o.ch.PublishWithContext(ctx,
		"",     // exchange
		q.Name, // routing key
		false,  // mandatory
		false,  // immediate
		amqp.Publishing{
			ContentType: "application/json",
			Body:        []byte(body),
		})
	if err != nil {
		return err
	}

	return nil
}
