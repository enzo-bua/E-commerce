import React from 'react'
import './index.css'
import { AddStartsComponents } from '../AddStartComponents'
export function Historial({ product }) {
  return (
    <div className='tarjeta'>
      <img src={product.url_imagen} alt="" />
      <div className='tarjeta-data'>
        <p className='name'>{product.nombre}</p>
        <p>{product.autor[0].nombre}</p>
        <p style={{marginTop: '-10px'}}><AddStartsComponents isbn={product.isbn}/></p>
      </div>
    </div>
  )
}
