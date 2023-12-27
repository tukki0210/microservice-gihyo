package repository

import (
	"context"
	"fmt"

	"gihyo/catalogue/domain/domainerror"
	"gihyo/catalogue/domain/repository"

	"github.com/jmoiron/sqlx"
)

const nextSequenceSQL = "UPDATE sequence SET sequence = (LAST_INSERT_ID(sequence) + 1) where name = ?"

type SequenceRepository struct {
	db *sqlx.DB
}

func NewSequenceRepository(db *sqlx.DB) repository.SequenceRepository {
	return &SequenceRepository{db: db}
}

func (s *SequenceRepository) NewBookId(ctx context.Context) (string, error) {
	next, err := s.next("id")
	if err != nil {
		return "", domainerror.NewInternalServerError(err.Error(), err)
	}
	if next > 999999 {
		return "", domainerror.NewInternalServerError("id sequence overflow", nil)
	}
	return fmt.Sprintf("%07d", next), nil
}

func (s *SequenceRepository) next(name string) (int64, error) {
	result, err := s.db.Exec(nextSequenceSQL, name)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}
