import Item from "./componentes/Item/Item"

const misProductos = [
    {id: 1, nombre: "Planta1", precio: 1000, img:"./img/planta_1.png"},
    {id: 2, nombre: "Planta2", precio: 1000, img:"./img/planta_2.png"},
    {id: 3, nombre: "Planta1", precio: 1000, img:"./img/planta_3.png"},
    {id: 4, nombre: "Planta1", precio: 1000, img:"./img/planta_4.png"},
]
export const getProductos = () => {
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(misProductos)
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(Item =>Item.id === id);
            resolve(producto)
        },2000)
    })
}