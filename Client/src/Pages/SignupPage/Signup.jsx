import React, { useState } from 'react'
import './Signup.css'
import Logo from '../../assets/logo.png'
import LoginImg from '../../assets/LoginImg.png'
import { useNavigate } from 'react-router-dom'
import { useSignup } from '../../Hooks/useSignup'

const Signup = () => {

  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();

      //useSignup hook
      const {signup, error} = useSignup()


  const handleClick = async (e)=>{
    e.preventDefault();
      await signup(name, email, phone, password);
      if(!error){
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        navigate('/dashboard')
      }
  }


  return (
    <div className='signupContainer'>
      <div className='signup_formContainer'>
        <div>
        <img src={Logo} alt="LogoImg" />
        </div>
        <div className='form'>
          <div className='titleDiv'>
            <h3>Create an account</h3>
            <p onClick={()=>navigate('/login')}>Sign in instead</p>
          </div>
            <div>
                <p>First name</p>
                <input
                required 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                type="text" />
            </div>
            <div>
                <p>Last name</p>
                <input 
                required 
                onChange={(e)=>setLname(e.target.value)}
                value={lname}
                type="text" />
            </div>
            <div>
                <p>Email</p>
                <input 
                required 
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text" />
            </div>
            <div>
                <p>Password</p>
                <input 
                required 
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="text" />
            </div>
            <div>
                <p>Confirm Password</p>
                <input 
                required 
                onChange={(e)=>setConfirmpassword(e.target.value)}
                value={confirmpassword}
                type="text" />
            </div>
            <div className='termsCheckBox'>
                <input type="checkbox" />
                <p>By creating an account, I agree to our <span>Terms of use</span> and <span>Privacy Policy</span> </p>
            </div>
            <button onClick={handleClick} className='signinPageBtn'>Create an account</button>
            {error  && <p style={{color:'red'}}>{error}</p>} 
        </div>
        <p className='terms'>This site is protected by reCAPTCHA and the <span>Google Privacy Policy</span> and <span>Terms of Service</span> apply.</p>
      </div>
        <img className='signupImage' src={LoginImg} alt="LoginImg" />
    </div>
  )
}

export default Signup