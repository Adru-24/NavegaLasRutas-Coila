import React from 'react'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContairer/ItemDetailContainer'


const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      
    </>
  )
}

export default App