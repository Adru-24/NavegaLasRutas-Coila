import React from 'react'
import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect(()=>{
        getUnProducto(1)
            .then(respuesta => setProducto(respuesta))
    },[])

    return (

        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer