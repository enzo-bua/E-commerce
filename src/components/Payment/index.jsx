import './index.css'
export function Payment () {
  return (
    <div className='card-payment'>
      <div className='card-payment-info'>
        <p>Nombre: </p>
        <p>DNI: </p>
        <p>Dirección: </p>
        <p>Teléfono: </p>
        <p>Código Postal: </p>
        <p>Info Adicional: </p>
      </div>
      <button className='button-pagar'>Pagar</button>
    </div>
  )
}