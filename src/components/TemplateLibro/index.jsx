import './index.css'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useCart } from '../../hooks/useCart'
import { useContext } from 'react'
import { userContext } from '../../Context/user'
import { useMutation } from '@apollo/client'
import { POST_FAVORITOS } from '../../hoc/Mutation/postFavoritos'
import { FavButton } from '../FavButton'

export function TemplateLibro ({ product }) {
  const  [agregarFavoritos]  = useMutation(POST_FAVORITOS)

  const { isAuth } = useContext(userContext)
  // console.log(isAuth)
  const [tokenFav, setTokenFav] = useLocalStorage(isAuth, false)

  const key = `favoritos-${product[0].isbn}`
  const [ favoritos, setFavoritos ] = useLocalStorage(key, false)

  // const Icons = favoritos ? AiFillHeart : AiOutlineHeart

  const { cart, addToCart} = useCart()
  const isProductInCart = cart.some(item => item.isbn === product[0].isbn)
  const noAddToCart = () => {
    return null
  }

  const handleFavoritos = () => {
    if (tokenFav === true){
      // setTokenFav(!tokenFav)
      setFavoritos(!favoritos)
      agregarFavoritos({ variables: { tokenUser: isAuth, isbn: product[0].isbn} })
    } else {
      alert('registrese')
    }
  }

  
  return (
      <div className='book'>
        <img src={product[0].url_imagen} alt="" />    
        <div className='book-info'>
          <FavButton onClick={handleFavoritos}/>
          {/* <button className='favoritos-button' onClick={handleFavoritos}>
            <Icons size='32px'/>
          </button> */}
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
                : addToCart(product)}}
          >
            Agregar a carrito <BsFillCartCheckFill size='20px'/> 
          </button>

          <input className='input-cantidad' type="number" min='0' max={product[0].stock} />

        </div>
        <hr />

      </div>
  )
}