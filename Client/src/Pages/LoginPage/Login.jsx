import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import LoginImg from '../../assets/LoginImg.png'
import { useLogin } from '../../Hooks/useLogin'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();
  const[name, setName] = useState('');
  const[password, setPassword] = useState('');

  const {login, error} = useLogin()

  const handleClick =async (e)=>{
    e.preventDefault();
    await login(name, password)
    if(error === 'Incorrect Username!'){
      setName("");
      setPassword("");
    }
    if(error === 'Incorrect password!'){
      setPassword("");
    }
  }


  return (
    <div className='loginContainer'>
      <div className='formContainer'>
        <div>
        <img src={Logo} alt="LogoImg" />
        </div>
        <div className='form'>
            <h3>Sign in to your Plexify</h3>
            <div>
                <p>Username</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" />
            </div>
            <div>
                <p>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" />
            </div>
            <button onClick={handleClick} className='loginpageBtn'>Log in</button>
            <p className='forgetPass'>Forgot password?</p>
            <p className='donthaveaccnt'>Don't have an account? <span onClick={()=>navigate('/signup')}>Sign up</span></p>
        </div>
        <p className='terms'>This site is protected by reCAPTCHA and the <span>Google Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
      </div>
        <img className='loginImage' src={LoginImg} alt="LoginImg" />
    </div>
  )
}

export default Login