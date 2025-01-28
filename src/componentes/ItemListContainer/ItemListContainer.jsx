import React, { useEffect, useState } from "react"
import {getProductos} from "../../asyncmock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({}) => {

    const[productos, setProductos] = useState([])

    useEffect(()=>{
        getProductos()
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
            
    },[])

    return (
        <div>

            <h2>mis productos</h2>
            <p>Las plantas mas lindas paara decorar tu hogar</p>
            <ItemList productos={productos}/>

        </div>
    )
}

export default ItemListContainer