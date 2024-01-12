import {
  Button, DialogActions, DialogContent,
  TextField, Typography
} from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react'

import { BootstrapDialog } from './components/BootstrapDialog'
import { BootstrapDialogTitle } from './components/BootstrapDialogTitle'
import { CartItem } from './types.ts';

const GET_BOOK = gql`
query ExampleQuery($bookId: Int){
  book(id: $bookId) {
    id
    title
    author
    price
  }
}
`

type PropsType = {
  bookId: number;
  cart: Array<CartItem>;
};


export const ProductPage = (props: PropsType) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [getBook, { loading, error, data }] = useLazyQuery(GET_BOOK);

  const handleClickOpen = () => {
    setOpen(true);
    getBook({ variables: { bookId: props.bookId } });
  }
  const handleClose = () => {
    setOpen(false);
  }

  const postCart = () => {
    props.cart.push({
      book: data.book,
      quantity: quantity,
    })
    setOpen(false);
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>`Error! ${error.message}`</p>

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        商品ページを見る
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth='sm'
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          商品ページ
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>書籍名: {data?.book.title}</Typography>
          <Typography gutterBottom>著者: {data?.book.author}</Typography>
          <Typography gutterBottom>価格: {data?.book.price}</Typography>
          <TextField
            id="quantiry"
            label="個数"
            defaultValue="1"
            size="small"
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={(event) => setQuantity(Number(event.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
          <Button onClick={postCart}>カートに入れる</Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default ProductPage