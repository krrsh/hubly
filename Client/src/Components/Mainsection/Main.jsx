import React from 'react'
import './Main.css'
import mainImg from '../../assets/mainImg.png'
import apps from '../../assets/apps.png'

const Main = () => {
  return (
    <div className='mainContainer'>
      <div className='headingContainer'>
        <h2>At its core, Hubly is a robust CRM solution.</h2>
        <p>Hubly helps businesses streamline customer interactions, track leads, and automate tasks—saving you time and maximizing revenue. Whether you’re a startup or an enterprise, Hubly adapts to your needs, giving you the tools to scale efficiently.</p>
      </div>
      <div className='aboutContainer'>
        <div className='aboutText'>
            <h3>MULTIPLE PLATFORMS TOGETHER!</h3>
            <p>Email communication is a breeze with our fully integrated, drag & drop email builder.</p>
            <h3>CLOSE</h3>
            <p>Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</p>
            <h3>NURTURE</h3>
            <p>Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</p>
        </div>
        <div className='aboutImageContainer'>
            <img className='appsImg' src={apps} alt="appsImg" />
            <img className='mainImg' src={mainImg} alt="mainImg" />
        </div>
      </div>
    </div>
  )
}

export default Main
