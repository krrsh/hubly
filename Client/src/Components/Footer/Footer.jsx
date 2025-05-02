import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'
import messageIcon from '../../assets/messageIcon.png'
import linkdin from '../../assets/linkdin.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import discord from '../../assets/discord.png'
import figma from '../../assets/figma.png'
import insta from '../../assets/insta.png'

const Footer = () => {
  return (
    <div className='footer_Container'>
      <div className='footerlogo'>
        <img src={Logo} alt="logoImg" />
      </div>
    <div className='footerContainer'>
      <div>
        <p>Product</p>
        <ul>
            <li>Universal checkout</li>
            <li>Payment workflows</li>
            <li>Observability</li>
            <li>UpliftAI</li>
            <li>Apps & integrations</li>
        </ul>
      </div>
      <div>
        <p>Why Primer</p>
        <ul>
            <li>Expand to new markets</li>
            <li>Boost payment success</li>
            <li>Improve conversion rates</li>
            <li>Reduce payments fraud</li>
            <li>Recover revenue</li>
        </ul>
      </div>
      <div>
        <p>Developers</p>
        <ul>
            <li>Primer Docs</li>
            <li>API Reference</li>
            <li>Payment methods guide</li>
            <li>Service status</li>
            <li>Community</li>
        </ul>
      </div>
      <div>
        <p>Resources</p>
        <ul>
            <li>Blog</li>
            <li>Success stories</li>
            <li>News room</li>
            <li>Terms</li>
            <li>Privacy</li>
        </ul>
      </div>
      <div>
        <p>Company</p>
        <ul>
            <li>Careers</li>
        </ul>
      </div>
      <div className='mediaContainer'>
        <ul>
            <li><img src={messageIcon} alt="messageIcon" /></li>
            <li><img src={linkdin} alt="linkdin" /></li>
            <li><img src={twitter} alt="twitter" /></li>
            <li><img src={youtube} alt="youtube" /></li>
            <li><img src={discord} alt="discord" /></li>
            <li><img src={figma} alt="figma" /></li>
            <li><img src={insta} alt="insta" /></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
