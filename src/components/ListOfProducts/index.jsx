import './index.css'
import { Product } from '../Product'
import { withProduct } from '../../hoc/Query/withProduct'
import { useQuery } from '@apollo/client'
export function ListOfProducts () {
  // const { data, loading } = useQuery(withProduct, {
  //   variables: {isbn: '', nombre: '', genero: '', autor: ''}
  // })

  const { data, loading } = useQuery(withProduct)

  return (
    <section className='container'>
      { loading
        ? <p>Cargando...</p> 
        : 
          data && data.getBook.book.map(product => (
            <Product key={product.isbn} product={product} />
    
          )) 
      }
    </section>
  )
}

