import './index.css'
import { useInputValue } from '../../hooks/useInputValue'
import { REGISTER } from '../../hoc/Mutation/postRegister'

import { useMutation } from '@apollo/client';
import { useState } from 'react';


export function UserFormRegister ({ onSubmit, title }) {

  const name = useInputValue('')
  const email = useInputValue('')
  const password = useInputValue('')
  const [ error, setError ] = useState()
  const [createUser] = useMutation(REGISTER)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser({ variables: { nombre: name.value, email: email.value , password: password.value } }) 
    .then(onSubmit)
    .catch(err => setError(err.message))
  }
 
  
  return (
    <>    
      {/* <form className='card' onSubmit={handleSubmit}>
      <h3 className='tit'>{title}</h3>
      <input  placeholder='Name' type='text' {...name}/>
        <input  placeholder='Email' type='text' {...email}/>
        <input placeholder='Password' type='password' {...password} />
        {error === 'Cannot return null for non-nullable field SendUser.user.' ? <p style={{display: 'grid', justifyContent:'center', color:'red'}}>Usuario ya existente</p> : null}
        <button  className='but'>{title}</button>
        </form> */}

  <form className="form" onSubmit={handleSubmit}>
    <span className="title">{title}</span>
    <label className="label">Username</label>
    <input type="text" className="input" {...name}/>
    <label className="label">Email</label>
    <input type="email" className="input" {...email}/>
    <label className="label">Password</label>
    <input type="password" name="password"  className="input" {...password}/>
    {error === 'Cannot return null for non-nullable field SendUser.user.' ? <p style={{display: 'grid', justifyContent:'center', color:'red'}}>Error, Usuario ya existente</p> : null}
    <button type="submit" className="submit">{title}</button>
  </form>

      
    </>
  )
}