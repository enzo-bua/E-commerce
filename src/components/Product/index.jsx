import './index.css'
import { Link } from 'react-router-dom'
export function Product ({ product }) {
  return (
    <div className='card'>
      <a href={`/book/${product.isbn}`}>
        <img src={product.url_imagen} alt="" />
        <div className='card-data'>
          <p className='name'>{product.nombre}</p>
          <strong>$ {product.precio}</strong>
          <p className='card-data-autor'>{product.autor.nombre}</p>
        </div>
      </a>
    </div>
  )
}