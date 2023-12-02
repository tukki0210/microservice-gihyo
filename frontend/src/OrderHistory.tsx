import { Button, DialogContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { BootstrapDialog } from './components/BootstrapDialog'
import { BootstrapDialogTitle } from './components/BootstrapDialogTitle'
import { useState } from 'react';

import { gql, useLazyQuery } from '@apollo/client';
import { OrderHistoryDetail } from 'OrderHistoryDetail'


const GET_ORDERS = gql`
    query Book($customerId: String){
        orders(customerId: $customerId){
            id
            customerId
            customerName
            orderItem{
                itemId
                quantity
                unitPrice
            }
        }
    }
`

type OrderItem = {
    itemId: number;
    quantity: number;
    unitPrice: number;
}

type Order = {
    id: number;
    customerId: string;
    customerName: string;
    orderItem: Array<OrderItem>;
    date: string;
}

export const OrderHistory = () => {

    const [open, setOpen] = useState(false);
    const [getOrders, {loading, error, data, refetch }] = useLazyQuery(GET_ORDERS);

    const handleClickOpen = () => {
        setOpen(true);
        refetch()
        getOrders({ variables: { customerId: "user" } });
    }
    const handleClose = () => {
        setOpen(false);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>`Error! ${error.message}`</p>


    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                注文履歴
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={() => setOpen(false)}>
                    注文履歴
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>注文ID</TableCell>
                                    <TableCell>日時</TableCell>
                                    <TableCell>詳細を見る</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.orders?.map((row: Order) => (
                                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope='row'>{row.id}</TableCell>
                                        <TableCell align='right'>{row.date}</TableCell>
                                        <TableCell align="right">
                                            <OrderHistoryDetail />
                                        </TableCell>
                                    </TableRow>
                                )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </BootstrapDialog>
        </div>
    )
}

export default OrderHistory
