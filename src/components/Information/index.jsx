import './index.css'
import { useContext, useRef } from 'react' 
import { Link} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { DATA_USER } from '../../hoc/Mutation/postDataUser'
import { userContext } from '../../Context/user'
export function Information () {

  const { isAuth } = useContext(userContext)
console.log(isAuth)
  const form = useRef()

  const [dataUser, {data}] = useMutation(DATA_USER)


  const hanldeSumbit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'address': formData.get('address'),
      'dni': formData.get('dni'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone') ,
      'info': formData.get('info') 
    }
    dataUser({ 
      variables: {
        tokenUser : isAuth,
        nombre: buyer.name, 
        dni: buyer.dni, 
        direccion: buyer.address, 
        AgregarInfo: buyer.info, 
        telefono: buyer.phone, 
        cod_postal: parseFloat(buyer.cp)
      } 
    })
    .then(null)
    .catch(error => console.log(error.message))
  }

  return (
    <div className="Information">
      {data && console.log(data)}
      <h5>Complete con sus datos de envio: </h5>
      <div className="Information-form">
        <form ref={form} onSubmit={hanldeSumbit}>
          <input type="text" placeholder="Nombre completo" name="name" />
          <input type="text" placeholder="Direccion" name="address" />
          <input type="text" placeholder="DNI" name="dni" />
          <input type="text" placeholder="Codigo postal" name="cp" />
          <input type="text" placeholder="Telefono" name="phone" />
          <input type="text" placeholder="Info" name="info" />
          <button>yes</button>
        </form>
      </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/book/cart">
              Regresar
            </Link>
          </div>
          {/* <div className="Information-next">
              <Link to=''><button type='submit' onClick={hanldeSumbit} >Continuar Compra</button> </Link>
          </div> */}
        </div>
      </div>
  )
}