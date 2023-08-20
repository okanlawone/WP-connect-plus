import { signInWithPopup } from "firebase/auth"
import { auth, provider} from "../config/firebase"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
   const result = await signInWithPopup(auth, provider)
   console.log(result)
   navigate('/')
  }

  return (
    <>
    <p>Sign in with Google to continue</p>
    <button onClick={signInWithGoogle}>Sign in with Google </button>
    </>
  )
}