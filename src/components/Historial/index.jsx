import React from 'react'

export function index() {
  return (
      <div className='cart-container '>
        <img src={product.url_imagen} alt="" />    
        <div className='cart-info'>
          <h3>{product.nombre}</h3>
          <p className='autor'>{product.autor[0].nombre}</p>
          <p >$ {product.precio}</p>
          <div className='cantidad'>
          </div>
          </div>

      </div>
  )
}
