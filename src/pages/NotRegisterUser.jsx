
import React from 'react'
import '../components/UserFormRegister/index.css'
import userContexto from '../Context/user'
import { UserFormRegister } from '../components/UserFormRegister'
import { UserFormLogin } from '../components/UserFormLogin/index'
export function NotRegisterUser() {

  return (
    <userContexto.Consumer>
      {
        ({ activateAuth }) =>{

          
          return (
            <>
              <h4 className='titulo-bienvenido'>Bienvenidos a Books Shop</h4>
            <div className='div'>
              <UserFormLogin title='Login' onSubmit={activateAuth}/>

              <UserFormRegister title='Register' onSubmit={activateAuth}/>


            </div>

            </>
          )
        }
      }
    </userContexto.Consumer>
    )
}
