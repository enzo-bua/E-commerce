import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeProducts } from './pages/HomeProducts'
import { UsersAdmin } from './pages/UsersAdmin'
import { useQuery } from '@apollo/client'
import { userContext } from '../Context/user'
import { GET_USER_ADMIN_TOKEN } from './hoc/Query/getUserAdminToken'
import { CategoryPage } from './pages/CategoryPage'

export function AppAdmin() {
  const { isAuth } = useContext(userContext)
  const { data } = useQuery(GET_USER_ADMIN_TOKEN, {
    variables: { token: isAuth }
  })
  data && console.log(data.getUsersAdmin.users[0].email)
  return (
    <Routes>
      <></>
      {/* <Route path="/admin/productos" element={<HomeProducts />}/> */}
      <Route path="/admin/user" element={<UsersAdmin/>}/>
      <Route path="/admin/category" element={<CategoryPage/>}/>

    </Routes>
  )
}
