package interfaces

import (
	"gihyo/catalogue/interfaces/service"

	pb "gihyo/catalogue/proto/book"

	"gihyo/catalogue/app/usecase/book"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	"gihyo/catalogue/domain/repository"

	"google.golang.org/grpc/health"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
)

type ServerParams struct {
	BookRepository repository.BookRepository
}

func NewServer(params ServerParams) *grpc.Server {
	server := grpc.NewServer()

	bookService := service.NewBookServer(
		book.NewListBooks(params.BookRepository),
		book.NewGetBook(params.BookRepository),
	)

	healthServer := health.NewServer()

	healthServer.SetServingStatus("", healthpb.HealthCheckResponse_SERVING)

	healthpb.RegisterHealthServer(server, healthServer)
	
	reflection.Register(server)

	pb.RegisterCatalogueServer(server, bookService)

	return server
}

