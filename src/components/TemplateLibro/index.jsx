import './index.css'
import { BsFillCartCheckFill } from 'react-icons/bs'

import { useCart } from '../../hooks/useCart'

import { FavButton } from '../FavButton'
import { useState } from 'react'
import { Comentarios } from '../Comentarios'
import { ComentariosQuery } from '../../container/ComentariosQuery'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function TemplateLibro ({ product }) {

  const { cart, addToCart} = useCart()
  const isProductInCart = cart.some(item => item.isbn === product[0].isbn) // si el product esta en cart
  const noAddToCart = () => {
    toast.error('El producto ya esta en el carrito')
  }

  const [count, setCount] = useState(1)

  const handleNotify = () => {
    toast.success('Se agrego al carrito correctamente')
  }
  
  return (
    <div className='book'>
        <ToastContainer />
        <img src={product[0].url_imagen} alt="" />    
        <div className='book-info'>
          <FavButton isbn={product[0].isbn}/>
          <h3>{product[0].nombre}</h3>
          <p className='autor'>{product[0].autor[0].nombre}</p>
          <p className='price'>$ {product[0].precio}</p>
          <hr />
          <strong>Descripción</strong>
          <p>{product[0].descripcion}</p>
          <p>ISBN: {product[0].isbn}</p>
          <p>Editorial: {product[0].editorial.nombre}</p>
          <p>Categoría: {product[0].genero[0].nombre}</p>
          <p>Stock diponible: {product[0].stock}</p>

          

          <button 
          className='button'
            onClick={() => {
              isProductInCart
                ? noAddToCart()
                :<>
                  {addToCart(product)}
                 { handleNotify()}
                </> 
              }}
          >
            Agregar a carrito <BsFillCartCheckFill size='20px'/> 
          </button>

          <input 
            className='input-cantidad' 
            defaultValue="1" 
            onChange={(e) => {setCount(e.target.value)}} 
            type="number" 
            min='1' 
            max={product[0].stock} 
          />
          <ComentariosQuery />
        </div>
        <hr />

      </div>
  )
}