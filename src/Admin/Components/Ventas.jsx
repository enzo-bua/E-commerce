import React, { useState ,useMemo } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import './index.css'
export function Ventas({ products }) {

  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleSort = () => {
    setSort(!sort)
  }

  const results = !search ? data.getBook.book : data.getBook.book.filter((dato)=> dato.isbn === search)

  const sortedProducts = useMemo(() => {
    return sort 
      ? [...results].sort((a, b) => a.nombre.localeCompare(b.nombre))
      : results
  }, [sort, results])

  return (
    <>
      {
        loading 
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
          : 
          <>
          <input value={search} onChange={hanldeChange} type="text"  placeholder='INGRESE ISBN ...' />
           <table>
              <thead>
                <tr>
                  <th>imagen</th>
                  <th>
                    <input style={{marginRight:'5px', cursor:'pointer'}} type="checkbox" onChange={handleSort} checked={sort}/>
                    Nombre
                    </th>
                  <th>Isbn</th>
                  <th>Autor</th>
                  <th>Stock</th>
                  <th>Descripcion</th>
                  <th>Genero</th>
                  <th>Precio</th>
                  <th>Descuento</th>
                  <th>Editorial</th>
                </tr>
              </thead> 
              <tbody>
                {sortedProducts.map((product) => (
                    
                  <tr key={product.isbn}>
                        <td><img className='imagen' src={product.url_imagen} alt="" /></td>
                        <td data-title='Nombre: '>{product.nombre}</td>
                          <td data-title='Isbn: '>{product.isbn}</td>
                          <td data-title='Autor: '>{product.autor[0].nombre }</td>
                          <td data-title='Stock: '>{product.stock}</td>
                          <td data-title='Descripcion: '>{product.descripcion.slice(0, 150)}</td>
                          <td data-title='Genero: '>{product.genero[0].nombre}</td>
                          <td data-title='$ '>{product.precio}</td>
                          <td data-title='Descuento: '>{product.descuento}</td>
                          <td data-title='Editorial: '>{product.editorial.nombre}</td>
                    </tr>
                    
                    )) 
                    
                  }
              </tbody>
          </table>
        </>
     } 
    </>
  )
}
