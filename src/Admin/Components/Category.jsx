import React from 'react'
import '../../components/Category/index.css'
export function Category({ product }) {
  return (
    <>
      <div className="container">
      <img className='container-imagen' src={product.url_imagen} alt={product.nombre} />
        <h5>{product.nombre}</h5>
      </div>
    </>
  )
}
