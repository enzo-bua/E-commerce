import React from 'react'
import './Modificar.css'
import { useRef } from 'react'
import { UPDATE_BOOK } from '../hoc/Mutation/UpdateBook'
import { useMutation } from '@apollo/client'

export function Modificar(props) {
  // const [updateBook, { data } ] = useMutation(UPDATE_BOOK)
  const form = useRef()
  
  const onCancel = () =>{
    props.setOpenModalMod(false);
  }  
  const hanldeSumbit = () => {

    
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'isbn': formData.get('isbn'),
      'autor': formData.get('autor'),
      'stock': formData.get('stock'),
      'descripcion': formData.get('descripcion'),
      'genero': formData.get('genero') ,
      'precio': formData.get('precio') ,
      'imagen': formData.get('imagen')
    }
    // updateBook({ variables: {:buyer.name,  :buyer.isbn,  :buyer.autor,  :buyer.stock,  :buyer.descripcion,  :buyer.genero,  :buyer.precio} })
  }
  return (
    <div className='Information' >
    <h5>MODIFICAR PRODUCTOS</h5>
    <div className='Information-form'>
      <form ref={form} onSubmit={hanldeSumbit}>
        <label>Nombre </label>
        <input type="text" name="name" />
        <label>Isbn </label>
        <input type="text" name="isbn" />
        <label>Autor </label>
        <input type="text" name="autor" />
        <label>Stock </label>
        <input type="number" name="stock" />
        <label>Descripcion</label>
        <textarea type="text" name="descripcion" />
        <label>Genero </label>
        <input type="text" name="genero" />
        <label>Precio </label>
        <input type="number" name="precio" />
        <label>Imagen</label>
        <input className='file' type="file" name='imagen' />
        <button type='button'>Guardar</button>
        <button className='but-cancel' type='button' onClick={onCancel}>Cancelar</button>
      </form>
    </div>

      </div>
  )
}

