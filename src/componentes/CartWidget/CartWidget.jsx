import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX31oL9dkS6rKI8_pgP7yVoo0irwabnEDrpQ&s"
    
  return (
    
    <div>

      <img className= 'imgCarrito' src={imgCarrito} alt="imagen del carrito" />
      <strong>2</strong>

    </div>
  )
}

export default CartWidget