// import { useState } from 'react'
// import { useQuery, gql } from '@apollo/client'
import './App.css'
import Catalogue from './Catalogue'
import { FC } from 'react'

type Book = {
  id: number,
  title: string,
  author: string,
  price: number
}


// type propsType = {
//   keycloak: any,

// }

type cart = {
  book: Book,
  quantity: number,
}

const App: FC = () => {
  // const keycloak = props.keycloak
const cart: cart[] = []

  return (
   <Catalogue cart={cart} />
  )
}

export default App
