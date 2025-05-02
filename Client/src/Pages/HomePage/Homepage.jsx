import React from 'react'
import './Homepage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Brands from '../../Components/Brands/Brands'
import Main from '../../Components/Mainsection/Main'
import Plans from '../../Components/Plans/Plans'
import Footer from '../../Components/Footer/Footer'
import FloatChat from '../../Components/FloatingChatbot/FloatChat'

const Homepage = () => {
  return (
    <div className='homeContainer'>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Main/>
      <Plans/>
      <Footer/>
      <FloatChat/>
    </div>
  )
}

export default Homepage
