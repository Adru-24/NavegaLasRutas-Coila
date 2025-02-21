import { useState } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img , descripcion }) => {
    
    const {agregarAlCarrito} = useContext(CarritoContext)

    const [agregarCantidad, setAgregarCantidad] = useState(0);
  
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = {id, nombre, precio}
        agregarAlCarrito(item, cantidad)
    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            {
            agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<Contador inicial={1} stock={stock} functionAgregar={manejadorCantidad} />)
            }

        </div>
    )
}

export default ItemDetail