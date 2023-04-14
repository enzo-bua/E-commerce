import React, {useMemo, useState} from 'react'
import { AiOutlineLoading3Quarters,AiOutlineDelete } from 'react-icons/ai'
import './index.css'
import { BsPencil } from 'react-icons/bs'
import { Modal } from '../../Modal'
import { Modificar } from './Modificar'
import { Carga } from './Carga'
import { Link, Route, Routes } from 'react-router-dom'

export function Products({ data, loading }) {
  const [openModalMod, setOpenModalMod] = useState(false)
  const [openModalAñd, setOpenModalAñd] = useState(false)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  const handleModalMod = () => {
    setOpenModalMod(prevState => !prevState)
  }

  const handleModalAñd = () => {
    setOpenModalAñd(prevState => !prevState)

  }

  const hanldeChange = (e) => {
    setSearch(e.target.value)
  }

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
      <section className='section-table'>
  
  
        {
          loading 
          ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
            : 
            <>
            <div className='div-buscador'>
              <button className='agregarButton' onClick={handleModalAñd}>
                Agregar Nuevo
              </button>
              <input value={search} onChange={hanldeChange} type="text"  placeholder='INGRESE ISBN ...' />
            </div>
  
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
                    <th>Option</th>
                  </tr>
                </thead> 
              <tbody>
                {sortedProducts.map((product) => (
                    
                  <tr key={product.isbn}>
                        <td><img className='imagen' src={product.url_imagen} alt="" /></td>
                        <td data-title='Nombre: '>{product.nombre}</td>
                          <td data-title='Isbn: '>{product.isbn}</td>
                          <td data-title='Autor: '>.</td>
                          <td data-title='Stock: '>{product.stock}</td>
                          <td data-title='Descripcion: '>{product.descripcion.slice(0, 150)}</td>
                          <td data-title='Genero: '>{product.genero[0].nombre}</td>
                          <td data-title='$ '>{product.precio}</td>
                          <td data-title='Descuento: '>{product.descuento}</td>
                          <td data-title='Editorial: '>{product.editorial.nombre}</td>
                          <td className='td-option'>
                            <div className="option">
                              <Link to={`/edit/${product.isbn}`} className='pencil'  onClick={handleModalMod}>
                                <BsPencil />
                              </Link>
                              <button className='trash'>
                                <AiOutlineDelete />
                              </button>
                            </div>
                          </td>
                    </tr>
                   
                    )) 
                    
                  }
                </tbody>
          </table>
        
            </>
            }
          {!!openModalAñd && (
            <Modal>
              <Carga
                setOpenModalAñd={setOpenModalAñd}
              />
  
            </Modal>
          )}
        {!!openModalMod && (
          <Modal>
            
      
            <Routes>
              <Route path="edit/:isbn" element={ <Modificar setOpenModalMod={setOpenModalMod}/>}/>
            </Routes>

           
  
          </Modal>
        )}
  
      </section>
    )    
  }