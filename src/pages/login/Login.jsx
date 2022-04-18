import React, { useState } from 'react'
import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import {useNavigate} from "react-router-dom"


function Login() {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate=useNavigate()

  const handleLogin = (e) => {
    setError(prev=>!prev)
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/")
         
        const user = userCredential.user;
        
        
        
      })
      .catch((error) => {
        setError(true)
        setEmail("")
        setPassword("") 
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <span><i>Wrong email or password</i></span>}
      </form>
    </div>
  )
}

export default Login