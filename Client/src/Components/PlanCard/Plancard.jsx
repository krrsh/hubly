import React from 'react'
import './Plancard.css'
import check from '../../assets/Check icon.png'

const Plancard = ({heading, caption, price, points}) => {
  return (
    <div className='plancardContainer'>
      <h2>{heading}</h2>
      <p className='caption' style={{opacity:'70%'}}>{caption}</p>
      <div className='priceContainer'>
        <h1>{price}</h1>
        <p>/monthly</p>
      </div>
      <p style={{fontWeight:'Bold'}}>What's included</p>
      <ul>
        {points.map((items, index)=>{
            return <li key={index}> <span><img src={check} alt="ckeckIcon" /></span>{items}</li>
        })}
      </ul>
      <button>SIGN UP FOR {heading}</button>
    </div>
  )
}

export default Plancard
