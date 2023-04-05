import React, {useState} from 'react'
import { GET_PRODUCTS_ALL } from '../hoc/Query/getBook'
import { useQuery } from '@apollo/client'
import { AiOutlineLoading3Quarters,AiOutlineDelete } from 'react-icons/ai'
import './index.css'
import { Header } from './Header'
import { BsPencil } from 'react-icons/bs'
import { Modal } from '../../Modal'
import { Modificar } from './Modificar'
import { Carga } from './Carga'

export function Products() {

  const { data, loading } = useQuery(GET_PRODUCTS_ALL)

  const [openModalMod, setOpenModalMod] = useState(false)
  const [openModalAñd, setOpenModalAñd] = useState(false)
  const [search, setSearch] = useState('')


  const handleModalMod = () => {
    setOpenModalMod(prevState => !prevState)

  }

  const handleModalAñd = () => {
    setOpenModalAñd(prevState => !prevState)

  }

  const hanldeChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <section className='section-table'>


      {
        loading 
        ? <AiOutlineLoading3Quarters style={{marginLeft:'50%', marginTop: '30%'}} size='32px'/> 
          : 
          <>
          <div className='agregarButton'>
            <button onClick={handleModalAñd}>
              Agregar Nuevo
            </button>

         </div>
        <table>

        <thead>
          <tr className=''>
            <th>imagen</th>
            <th>Nombre</th>
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
       { data && data.getBook.book.map((product) => (
          
         <tr key={product.isbn}>
              <td><img className='imagen' src={product.url_imagen} alt="" /></td>
              <td>{product.nombre}</td>
                <td>{product.isbn}</td>
                <td>{product.autor[0].nombre }</td>
                <td>{product.stock}</td>
                <td>{product.descripcion.slice(0, 150)}</td>
                <td>{product.genero[0].nombre}</td>
                <td>{product.precio}</td>
                <td>{product.descuento}</td>
                <td>{product.editorial.nombre}</td>
                <td className='td-option'>
                  <div className="option">
                    <button className='pencil' onClick={handleModalMod}>
                      <BsPencil />
                    </button>
                    <button className='trash'>
                      <AiOutlineDelete />
                    </button>
                  </div>
                </td>
            </tr>
          ))}
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
          <Modificar
            setOpenModalMod={setOpenModalMod}
          />

        </Modal>
      )}

    </section>
  )    
}
