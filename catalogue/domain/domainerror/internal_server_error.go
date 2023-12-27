package domainerror

import (
	"github.com/pkg/errors"
)

// InternalServerError is an error that occurs when an internal server error occurs.
type InternalServerError struct {
	message string
	cause error
}

// NewInternalServerError creates a new InternalServerError.
func NewInternalServerError(message string, cause error) error {
	return errors.WithStack(&InternalServerError{message, cause})
}

// Error returns the error message.
func (i *InternalServerError) Error() string {
	return i.message
}


func (i *InternalServerError) Unwrap() error {
	return i.cause
}
