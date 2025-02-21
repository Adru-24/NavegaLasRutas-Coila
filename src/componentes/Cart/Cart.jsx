import { useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import React from 'react';
import CartItem from '../cartItem/CartItem';
import './Cart.css';

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    if (cantidadTotal === 0) {
      return (
        <>
          <h2>No hay productos en el carrito, Selecciona un producto.</h2>
          <Link to = "/"> Ver Producto </Link>
        </>
      )
    }

  return (
    <div className='cart_container'>
      {
        carrito.map(producto => <CartItem key= {producto.id} {...producto}/>)
      }
        <h3>Total: ${total}</h3>
        <h3>Cantidad Total: {cantidadTotal}</h3>
        <button onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  )
}

export default Cart