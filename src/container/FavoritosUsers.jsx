import '../components/ListOfProducts/index.css'
import React, { useContext } from 'react'
import { userContext } from '../Context/user'
import { useQuery } from '@apollo/client'
import { GET_FAVORITOS_USER } from '../hoc/Query/getFavoritosUser'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { Favorito } from '../components/Favorito'

export function FavoritosUsers() {

  const { isAuth } = useContext(userContext)

  const { data, loading } = useQuery(GET_FAVORITOS_USER, {
    variables: { tokenUser: isAuth }
  })
  return (
    <>
      {
        data &&  data.getFavoritos.favoritos.length > 0
        ? <section className='container'>
              { 
                loading
                  ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
                  : 
                    data && data.getFavoritos.favoritos.map(product => (
                      <Favorito key={product.books.isbn} product={product.books} />
                    )) 
              }
            </section>
          : 
           <h5 style={{color: 'red', display: 'grid', justifyContent: 'center', marginTop: '1%' }}>No tienes libro Favoritos!</h5>
      }
    </>
  )
}