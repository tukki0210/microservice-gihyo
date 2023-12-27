package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"

	"gihyo/catalogue/infrastructure/repository"
	"gihyo/catalogue/interfaces"

	_ "github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
)


var (
	port = flag.Int("port", 50051, "the server port")
)

func main() {
	flag.Parse()

	dsn := os.Getenv("DATABASE")
	if dsn == "" {
		dsn = "catalogue_user:default_password@tcp(127.0.0.1:3306)/booksdb"
	}

	db, err := sqlx.Open("mysql", dsn)
	if err != nil {
		panic("failed to connect database")
	}
	defer db.Close()


	sequenceRepository := repository.NewSequenceRepository(db)
	bookRepository := repository.NewBookRepository(db, sequenceRepository)

	// サーバーを起動する際に、書籍情報を保持するスライスを渡す
	server := interfaces.NewServer(interfaces.ServerParams{
		BookRepository: bookRepository,
	})

	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	log.Printf("server listening at %v", lis.Addr())

	// サーバーを起動し、エラー発生時にはエラーメッセージを出力
	if err := server.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
