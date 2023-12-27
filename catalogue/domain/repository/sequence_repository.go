package repository

import (
	"context"
)

type SequenceRepository interface {
	NewBookId(ctx context.Context) (string, error)
}