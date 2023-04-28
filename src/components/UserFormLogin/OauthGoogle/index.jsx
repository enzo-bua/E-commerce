import { GoogleLogin } from '@react-oauth/google';


export function LoginGoogle () {

  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse)
  }

  const handleError = (response) => {
    console.log(response)
  }

  return (
    <div id="signInButton">
      <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
    </div>
  )
}