import { useQuery } from '@apollo/client'
import React, { useRef } from 'react'
import { GET_INFORMATION } from '../../hoc/Query/getInformation'
import { useContext } from 'react'
import { userContext } from '../../Context/user'

export default function RecuperarPassword() {
  const { isAuth } = useContext(userContext)
  const { data } = useQuery(GET_INFORMATION, {
    variables: { tokenUser: isAuth }
  })
  data && console.log(data)
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'password': formData.get('password')
    }
  }
  return (
    <div className='vh'>
      <div className='info'>
        <p>nombre: {data && data.LoginUser.user.nombre}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.dni}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.direccion}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.ciudad.nombre}</p>
        <p>nombre: {data && data.LoginUser.user.nombre}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.ciudad.cod_postal}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.telefono}</p>
        <p>nombre: {data && data.LoginUser.user.direccion.AgregarInfo}</p>

      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="text" name="" id="" />
        <button>Cambiar</button>
      </form>

    </div>
  )
}

