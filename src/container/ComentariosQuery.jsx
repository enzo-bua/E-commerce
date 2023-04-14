import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_COMENTARIOS } from '../hoc/Query/getComentarios'
export  function ComentariosQuery() {
  const { data } = useQuery(GET_COMENTARIOS,{
    variables: { isbn: '126' }
  })
  data && console.log(data)
  return (
  data && console.log(data)
  )
}
