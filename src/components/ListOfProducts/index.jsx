import './index.css'
import { Product } from '../Product'
import { withProduct } from '../../hoc/Query/withProduct'
import { useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useSearch } from '../../hooks/useSearch'
import { SearchPoducts } from '../SearchProducts'

export function ListOfProducts () {
  // const { data, loading } = useQuery(withProduct, {
  //   variables: {isbn: '', nombre: '', genero: '', autor: ''}
  // })
  const { data, loading } = useQuery(withProduct)


  return (
    <section className='container'>
      { loading
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
        : 
          data && data.getBook.book.map(product => (
            <Product key={product.isbn} product={product} />
    
          )) 
      }
    </section>
  )
}

