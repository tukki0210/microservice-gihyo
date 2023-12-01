import { Button, Dialog, DialogActions, DialogContent,
        DialogTitle, IconButton, TextField, Typography, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLazyQuery, gql } from '@apollo/client';
import { FC, useState } from 'react'

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
type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};

type Cart = {
  book: Book;
  quantity: number;
};

type PropsType = {
  bookId: number;
  cart: Array<Cart>;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

type BootstrapPropsType = {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}
const BootstrapDialogTitle: FC<BootstrapPropsType> = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export const ProductPage: FC<PropsType> = (props) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [getBook, { loading, error, data }] = useLazyQuery(GET_BOOK);

  console.log(open)

  const handleClickOpen = () => {
    setOpen(true);
    getBook({ variables: { bookId: props.bookId } });
    console.log(props.bookId)
    console.log(data)
  }
  const handleClose = () => {
    setOpen(false);
  }

  const postCart = () => {
    props.cart.push({
      book: data.book,
      quantity: quantity,
    })
    console.log(props.cart)
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