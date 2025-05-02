import React from 'react'
import './Brands.css';
import adobe from '../../assets/adobe.png'
import elastic from '../../assets/elastic.png'
import opendoor from '../../assets/opendoor.png'
import framer from '../../assets/framer.png'
import airtable from '../../assets/airtable.png'

const Brands = () => {
  return (
    <div className='brandsContainer'>
    <div className='scrollContent'>
      <img src={adobe} alt="adobeLogo" />
      <img src={elastic} alt="elasticLogo" />
      <img src={opendoor} alt="opendoorLogo" />
      <img src={airtable} alt="airtableLogo" />
      <img src={elastic} alt="elasticLogo" />
      <img src={framer} alt="framerLogo" />
      
      <img src={adobe} alt="adobeLogo" />
      <img src={elastic} alt="elasticLogo" />
      <img src={opendoor} alt="opendoorLogo" />
      <img src={airtable} alt="airtableLogo" />
      <img src={elastic} alt="elasticLogo" />
      <img src={framer} alt="framerLogo" />
      </div>
    </div>
  )
}

export default Brands
