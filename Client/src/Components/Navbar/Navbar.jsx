import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navContainer'>
      <div className='logoContainer'>
        <img className='logo' src={logo} alt="Logo" />
      </div>
      <div className='buttonContainer'>
        <p onClick={()=>navigate('/login')} className='loginBtn'>Login</p>
        <button onClick={()=>navigate('/signup')} className='signupBtn'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
