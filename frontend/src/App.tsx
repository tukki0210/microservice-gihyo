import { Box, Container } from '@mui/material'
import './App.css'
import Catalogue from './Catalogue'
import { BasicAppBar } from 'BasicAppBar'
import { CartItem} from './types.ts';


// type propsType = {
//   keycloak: any, 
// }


const App = () =>  
{
  // const keycloak = props.keycloak
  const cart: CartItem[] = []

  return (
    <Box sx={{ flexGrow: 1 }}>
      <BasicAppBar cart={cart} />
      <Container>
        <Catalogue cart={cart} />
      </Container>
    </Box>
  )
}

export default App
