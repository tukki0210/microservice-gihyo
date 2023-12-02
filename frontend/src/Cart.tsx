import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

import { BootstrapDialog } from './components/BootstrapDialog'
import { BootstrapDialogTitle } from './components/BootstrapDialogTitle'
import { CartItem } from './types.ts';


const POST_ORDER = gql`
    mutation Mutation($input: OrderInput){
        createOrder(input: $input) 
}
`

type PropsType = {
    cart: Array<CartItem>;
};


export const Cart = (props: PropsType) => {
    const [open, setOpen] = useState(false);
    const [postOrder, { loading, error, data }] = useMutation(POST_ORDER);

    console.log(data)

    const handleClickOpen = () => {
        setOpen(true);
        console.log(props.cart)
    };

    const handleClose = () => {
        setOpen(false);
    }

    const clearCart = () => {
        for (let i = 0; i < props.cart.length; i++) {
            props.cart.pop()
        }
        setOpen(false)
    }

    const submitOrder = () => {
        postOrder({
            variables: {
                "input": {
                    "customerId": "user",
                    "customerName": "技術　太郎",
                    "orderItem": props.cart.map((item) => {
                        console.log(item);
                        return {
                            "itemId": item.book.id,
                            "quantity": Number(item.quantity),
                            "unitPrice": Number(item.book.price)
                        }
                    })
                }
            }
        })

        console.log(props.cart)
        for (let i = 0; i < props.cart.length; i++) {
            props.cart.pop()
        }
        setOpen(false)
        alert("注文が完了しました")
    }


    if (loading) return <p>Loading...</p>
    if (error) return <p>`Error! ${error.message}`</p>


    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>カート</Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="cart-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth='sm'
            >
                <BootstrapDialogTitle
                    id="cart-dialog-title" onClose={handleClose}>
                    カート
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>書籍名</TableCell>
                                    <TableCell align="right">価格&nbsp;（円）</TableCell>
                                    <TableCell>個数</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.cart.map((row: CartItem) => (
                                    <TableRow key={row.book.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope='row'>{row.book.title}</TableCell>
                                        <TableCell align="right">{row.book.price}</TableCell>
                                        <TableCell align='right'>{row.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={clearCart}>カートを空にする</Button>
                    <Button onClick={submitOrder}>注文</Button>
                    {loading && <Button autoFocus>
                        注文中
                    </Button>}
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}


export default Cart