import React, { useRef } from 'react'
import './Modificar.css'
import { POST_BOOK } from '../hoc/Mutation/PostBook'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

export function Carga(props) {
  const [ dataBook, { data } ] = useMutation(POST_BOOK)
  const form = useRef()
  const navigate = useNavigate()
  //MODAL
  const onCancel = () =>{
    props.setOpenModalAñd(false);
  }  

  const hanldeSumbit = () => {
    
    const formData = new FormData(form.current)
    const buyer = {
      'isbn': formData.get('isbn'),
      'imagen': formData.get('imagen'),
      'name': formData.get('name'),
      'precio': formData.get('precio'),
      'stock': formData.get('stock'),
      'descripcion': formData.get('descripcion'),
      'fechaIngreso': formData.get('fechaIngreso'),
      'editorial': formData.get('editorial'),
      'descuento': formData.get('descuento'),
      'genero': formData.get('genero') ,
      'autor': formData.get('autor')
    }
    dataBook({ 
      variables: {isbn: buyer.isbn, imagen: buyer.imagen, nombre: buyer.name, precio: parseFloat(buyer.precio), 
      stock :parseInt(buyer.stock), descripcion: buyer.descripcion, fechaIngreso: buyer.fechaIngreso, editorial: buyer.editorial,
      descuento: parseFloat(buyer.descuento), genero: buyer.genero, autor: buyer.autor} 
    })

  .then(navigate('/'))
  .catch(null)
  }
  return (
    <div className='Information' >
    <h5>CARGAR PRODUCTOS</h5>
    <div className='Information-form'>
      <form ref={form} onSubmit={hanldeSumbit}>
        <label>Nombre </label>
        <input placeholder='Ingrese nombre' type="text" name="name" />
        <label>Isbn </label>
        <input placeholder='Ingrese ISBN' type="text" name="isbn" />
        <label>Autor </label>
        <input placeholder='Ingrese autor' type="text" name="autor" />
        <label>Stock </label>
        <input placeholder='Ingrese stock' type="number" name="stock" />
        <label>Descripcion</label>
        <textarea placeholder='Ingrese descripcion' type="text" name="descripcion" />
        <label>Genero </label>
        <input placeholder='Genero' type="text" name="genero" />
        <label>Precio </label>
        <input placeholder='Precio' min="0" type="number" name="precio" />
        <label>Descuento </label>
        <input placeholder='Ingrese descuento' min="0" type="number" name="descuento" />
        <label>Fecha de Ingreso </label>
        <input placeholder='Ingrese fecha de ingreso' type="text" name="fechaIngreso" />
        <label>Editorial </label>
        <input placeholder='Ingrese editorial' type="text" name="editorial" />
        <label>Imagen</label>
        <input placeholder='Ingrese imagen (https://...)' className='file' type="text" name='imagen' />
        <button className='button-guardar' type='submite'>Guardar</button>
        <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
      </form>
    </div>

      </div>
  )
}