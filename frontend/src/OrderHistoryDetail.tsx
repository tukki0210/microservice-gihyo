import { useState } from 'react';
import { BootstrapDialog } from './components/BootstrapDialog'
import { BootstrapDialogTitle } from './components/BootstrapDialogTitle'
import { gql, useLazyQuery } from '@apollo/client';
import { Button, DialogActions, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const GET_ORDER = gql`
    query ExampleQuery($orderId: String){
        order(orderId: $orderId){
            id
            customerId
            customerName
            orderItem{
                itemId
                title
                author
                quantity
                unitPrice
            }
        }
    }
`

type OrderItem = {
    itemId: number;
    title: string;
    author: string;
    quantity: number;
    unitPrice: number;
}

export const OrderHistoryDetail = () => {
    const [open, setOpen] = useState(false);
    const [getOrder, { loading, error, data }] = useLazyQuery(GET_ORDER);

    const handleClickOpen = () => {
        setOpen(true);
        getOrder({ variables: { orderId: "1" } });
    }

    const handleClose = () => {
        setOpen(false);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>`Error! ${error.message}`</p>

    console.log(data)

    return (
        <div>
            <Button onClick={handleClickOpen}></Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="order-history-detail-dialog-title"
                open={open}
                fullWidth={true}
                maxWidth="sm"
            >
                <BootstrapDialogTitle id="order-history-detail-dialog-title" onClose={handleClose}>
                    注文履歴詳細
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>注文ID: {data?.order.id}</Typography>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>書籍名</TableCell>
                                    <TableCell>著者名</TableCell>
                                    <TableCell align="right">価格&nbsp;(円)</TableCell>
                                    <TableCell>個数</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.order.orderItem.map((row:  OrderItem, index: number ) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell>{row.author}</TableCell>
                                        <TableCell align="right">{row.unitPrice}</TableCell>
                                        <TableCell align="right">{row.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        閉じる
                    </Button>
                </DialogActions>

            </BootstrapDialog>
        </div>
    )
}

export default OrderHistoryDetail