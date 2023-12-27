package service

import (
	"context"
	usecase "gihyo/catalogue/app/usecase/book"

	"gihyo/catalogue/domain/model"
	pb "gihyo/catalogue/proto/book"

	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

type BookServer struct {
	listBooks usecase.ListBooks
	getBook   usecase.GetBook
	pb.UnimplementedCatalogueServer
}

func NewBookServer(
	listBooks usecase.ListBooks,
	getBook usecase.GetBook,
) pb.CatalogueServer {
	return &BookServer{
		listBooks: listBooks,
		getBook:   getBook,
	}
}

func (s *BookServer) ListBooks(ctx context.Context, in *emptypb.Empty) (*pb.ListBooksResponse, error) {
	books, err := s.listBooks(ctx)
	if err != nil {
		return nil, err
	}

	protoBooks := make([]*pb.Book, 0)

	for _, book := range books {
		protoBooks = append(protoBooks, BookToProto(book))
	}

	response := &pb.ListBooksResponse{Books: protoBooks}
	return response, nil
}

func BookToProto(book *model.Book) *pb.Book {
	return &pb.Book{
		Id:     int32(book.Id),
		Title:  book.Title,
		Author: book.Author,
		Price:  int32(book.Price),
	}
}

func (s *BookServer) GetBook(ctx context.Context, request *pb.GetBookRequest)(*pb.GetBookResponse, error) {
	params := usecase.GetBooksParam{ID: int(request.Id)}

	book, err := s.getBook(ctx, params)
	if err != nil {
		return nil, err
	}

	protoBook := BookToProto(book)

	return &pb.GetBookResponse{Book: protoBook}, nil
}