import './index.css'

export function Form () {
  return (
    <>
    <form >
        {/* REST OPERATOR: {...email} , usa todas las propiedades, el value y onChange */}
        <input  placeholder='Email' />
        <input placeholder='Email' type='password'  />
        <button >register</button>
      </form>
    </>
  )
}