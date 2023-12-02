import { AppBar, Toolbar, Typography } from "@mui/material"
import Cart from "Cart"
import OrderHistory from "OrderHistory"
import { CartItem } from './types.ts';


// type propsType = {
//   keycloak: any,
// }



type PropsType = {
    cart: Array<CartItem>;
}


export const BasicAppBar = (props: PropsType) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Bookshop Sample
                </Typography>
                <Cart cart={props.cart} />
                <OrderHistory />
            </Toolbar>
        </AppBar>
    )
}
