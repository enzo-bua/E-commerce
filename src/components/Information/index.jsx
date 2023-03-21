import './index.css'
import { useRef } from 'react' 
import { Link} from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { DATA_USER } from '../../hoc/Mutation/postDataUser'
export function Information () {

  const form = useRef()

  const [dataUser] = useMutation(DATA_USER)


  const hanldeSumbit = () => {

    dataUser({ variables: {tokenUser, nombre, direccion, dni, AgregarInfo, telefono, cod_postal} })

    const formData = new FormData(form.current)
    const buyer = {
      'name': formData.get('name'),
      'address': formData.get('address'),
      'city': formData.get('city'),
      'country': formData.get('dni'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone') ,
      'info': formData.get('info') 
    }
    console.log(buyer)
  }

  return (
    <div className="Information">
          <h5>Complete con sus datos de envio: </h5>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="DNI" name="dni" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
            <input type="text" placeholder="Info" name="info" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/book/cart">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
              <Link to=''><button type='submit' onClick={hanldeSumbit()} >Continuar Compra</button> </Link>
          </div>
        </div>
      </div>
  )
}