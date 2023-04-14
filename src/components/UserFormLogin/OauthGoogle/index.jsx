import { GoogleLogin } from "@react-oauth/google"


const clientId = '976494825699-anepqjr0v6j97cqqelpp3fap9ont07bc.apps.googleusercontent.com'

export function LoginGoogle () {

  const onSuccess = (res) => {
    console.log('login succes', res)
  }

  const onFailure = (res) => {
    console.log('login failure', res)
  }

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}