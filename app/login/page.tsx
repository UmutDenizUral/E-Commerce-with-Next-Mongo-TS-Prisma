import { getCurrentUser } from "../actions/getCurrentUser"
import LoginClient from "../components/auth/LoginClient"
import AuthContainer from "../components/containers/AuthContainer"


const Login = async() => {
  const currentUser = await getCurrentUser()
  return (
  <div>
    <LoginClient/>

    
  </div>
  )
}

export default Login