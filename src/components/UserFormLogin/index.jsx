import '../UserFormRegister/index.css'
import { useInputValue } from '../../hooks/useInputValue'
import { useQuery } from '@apollo/client'
import { LOGIN } from '../../hoc/Query/getUser'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export function UserFormLogin ({ onSubmit, title }) {
  const Navigate = useNavigate()
  const email = useInputValue('')
  const password = useInputValue('')
  const [ error, setError ] = useState()

  const { data } = useQuery(LOGIN, {
    variables: { email: email.value, password: password.value}
  })

  
  const handleSubmit = (e) => {
    onSubmit
    e.preventDefault()
    if (data.LoginUser.accessToken === ''){
      setError('Error, Usuario no registrado')
    } else {
      window.sessionStorage.setItem('token', data.LoginUser.accessToken)
      onSubmit()
      Navigate('/')
    }
  }
 
  
  return (
    <>    

  <form className="form-login" onSubmit={handleSubmit}>
    <span className="title">{title}</span>
    <label  className="label">Email</label>
    <input type="email" id="email" name="email" required="" className="input" {...email}/>
    <label  className="label">Password</label>
    <input type="password" name="password"  className="input" {...password}/>
    {error && <p style={{display: 'grid', justifyContent:'center', color:'red'}}>{error}</p>}
    <button type="submit" className="submit">{title}</button>
  </form>

      
    </>
  )
}