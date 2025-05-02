import React from 'react'
import './Plans.css'
import Plancard from '../PlanCard/Plancard'

const Plans = () => {

    const points1 = ['Unlimited Users', 'GMB Messaging', 'Reputation Management', 'GMB Call Tracking', '24/7 Award Winning Support']; 
    const points2 = ['Pipeline Management', 'Marketing Automation Campaigns', 'Live Call Transfer', 'GMB Messaging', 'Embed-able Form Builder', 'Reputation Management', '24/7 Award Winning Support']; 

  return (
    <div className='plansContainer'>
      <div className='plansTextContainer'>
        <h2>We have plans for
        everyone!</h2>
        <p>We started with a strong foundation, then simply built all of the sales and marketing tools ALL businesses need under one platform.</p>
      </div>
      <div className='cardsSection'>
        <Plancard heading={'STARTER'} caption={'Best for local businesses needing to improve their online reputation.'} price={'$199'} points={points1}/>
        <Plancard heading={'GROW'} caption={'Best for all businesses that want to take full control of their marketing automation and track their leads, click to close.'} price={'$399'} points={points2}/>
      </div>
    </div>
  )
}

export default Plans
