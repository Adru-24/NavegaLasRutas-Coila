import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContairer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element={ <Cart/> } />
          <Route path='/checkout' element={ <Checkout/> } />
          <Route path='*' element={ <h2>Sitio en construcción</h2> } />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App