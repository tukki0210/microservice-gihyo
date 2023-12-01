import { useQuery, gql } from '@apollo/client';
import { Paper, Table, TableBody, TableCell, 
        TableContainer,TableHead, TableRow } from '@mui/material';

import { ProductPage } from './ProductPage'
import { FC } from 'react';


const LIST_BOOKS = gql`
  query ListBooks {
    books {
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
    cart: Array<Cart>;
};


export const Catalogue: FC<PropsType> = (props) => {
    const { loading, error, data } = useQuery(LIST_BOOKS)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>書籍名</TableCell>
                        <TableCell>著者名</TableCell>
                        <TableCell align="right">価格&nbsp;（円）</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.books.map((row: Book) => (
                        <TableRow key={row.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 }}} >
                            <TableCell component="th" scope='row'>{row.title}</TableCell>
                            <TableCell>{row.author}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="center">
                                <ProductPage bookId={row.id} cart={props.cart} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>)
}

export default Catalogue