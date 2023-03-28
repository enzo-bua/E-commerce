import { FaTrash } from 'react-icons/fa'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useCart } from '../../hooks/useCart';
import './index.css'
import { Link } from 'react-router-dom';


function CartItem ({product}) {
  const { addToCart, removeFromCart, clearCart} = useCart() 

  return (
      <div className='cart-container '>
        <img src={product.url_imagen} alt="" />    
        <div className='cart-info'>
          <h3>{product.nombre}</h3>
          <p className='autor'>{product.autor[0].nombre}</p>
          <p >$ {product.precio}</p>
          <div className='cantidad'>
            <button className='increment' onClick={() =>addToCart(product)}>+</button>
            <p>{product.quantity}</p>
            <button className='decrement' onClick={() => clearCart(product)}>-</button>
            <button className='delate' onClick={() => removeFromCart(product)}><FaTrash size='20px'/> </button>
          </div>
          </div>

      </div>
  )
}

export function Cart () {
  const { cart} = useCart()
  const hanldeCantidadLibros = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity
    const sum = cart.reduce(reducer,0)
    return sum
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.precio * currentValue.quantity
    const sum = cart.reduce(reducer, 0)
    return sum;
  }

  return (
    <aside>
      <ul>
        {
          cart.map(product => (
            
            <CartItem key={product.isbn} product={product} />
            ))
        }
      </ul>
        <hr />
        {
          cart.length > 0 
            ? 
              <div className='card-cupon'>
                <h4>Canidad de libros {hanldeCantidadLibros()}</h4>
                <div className='total'>
                <h5>Total: </h5> 
                <h5>$ {handleSumTotal()}</h5>
                </div>
                <BiRightArrowAlt className='icons' size='12px' />
                <input type="text" placeholder='Cupon de descuento'  />
                <button >Agregar</button>
                <Link to='/book/information'><button className='continuar-pedido'>Continuar Pedido</button></Link> 
              </div>
        : <h5 style={{color: 'red', display: 'grid', justifyContent: 'center'}}>No hay libros en tu carrito!</h5>
        }
    </aside>          
  );         
}