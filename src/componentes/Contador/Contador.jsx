import { useState } from 'react';

const Contador = ({ inicial, stock, functionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

  return (
    <>
        <div>
            <button onClick={restarContador}> - </button>
            <strong> {contador} </strong>
            <button onClick={sumarContador}> + </button>
        </div>
        <button onClick={()=> functionAgregar(contador)}>Agregar al carrito</button>
    </>
  )
}

export default Contador