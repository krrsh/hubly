import React, { useState } from 'react'
import './FloatChat.css'
import chatbotIcon from '../../assets/chatBotIcon.png'
import WelcomeMsg from '../WelcomeMsg/WelcomeMsg'
import chatClosingIcon from '../../assets/floatingXIcon.png'
import ChatBot from '../ChatBot/ChatBot'

const FloatChat = () => {

    const[chatOpen, setChatOpen] = useState(false)

  return (
    <div className='floatChatContainer'>
      {chatOpen ?
      <>
      <ChatBot className={'floatChatBot'} headerColor={"#33475B"}
          bgColor={'#EEEEEE'}
          firstText={{
            first: "How can I help you?",
            second: "Ask me anything!",
          }}
          userDetails={{
            name: "Your name",
            phone: "+1(000)000-000",
            email: "example@gmail.com",
          }}/>
      <img onClick={()=>setChatOpen(false)} src={chatClosingIcon} alt="chatImg" />
      </> :
      <>
      <WelcomeMsg/>
      <img onClick={()=>setChatOpen(true)} src={chatbotIcon} alt="chatImg" />
      </>
      }
    </div>
  )
}

export default FloatChat
