import React, { useState } from "react";
import "./UserNavbar.css";
import cloudLogo from "../../assets/cloudLogo.png";
import dashboard from "../../assets/dashboard.png";
import contact from "../../assets/contact.png";
import analytics from "../../assets/analytics.png";
import chatbot from "../../assets/chatbot.png";
import team from "../../assets/team.png";
import settings from "../../assets/settings.png";
import onlineProfile from "../../assets/online.png";
import {useNavigate} from 'react-router-dom'

const UserNavbar = ({ value }) => {

  const [page, setPage] = useState(value)
  const navigate = useNavigate()

  const handlePage = (page)=>{
    setPage(page)
    if(page === 'Dashboard'){
      navigate('/dashboard')
    }
    if(page === 'Contact'){
      navigate('/contact-center')
    }
    if(page === 'Analytics'){
      navigate('/analytics')
    }
    if(page === 'Chatbot'){
      navigate('/chat-bot')
    }
    if(page === 'Team'){
      navigate('/team')
    }
    if(page === 'Settings'){
      navigate('/settings')
    }
  }

  return (
    <div className="navIconsContainer">
      <div className="navoptionsContainer">
        <div className="logo">
          <img src={cloudLogo} alt="LogoImg" />
        </div>

        <div onClick={()=>handlePage('Dashboard')}>
          <img src={dashboard} alt="messageIcon" />
          {page === "Dashboard" && <p>Dashboard</p>}
        </div>

        <div onClick={()=>handlePage('Contact')}>
          <img src={contact} alt="contact" />
          {page === "Contact" && <p>Contact Center</p>}
        </div>

        <div onClick={()=>handlePage('Analytics')}>
          <img src={analytics} alt="analytics" />
          {page === "Analytics" && <p>Analytics</p>}
        </div>

        <div onClick={()=>handlePage('Chatbot')}>
          <img src={chatbot} alt="chatbot" />
          {page === "Chatbot" && <p>Chatbot</p>}
        </div>

        <div onClick={()=>handlePage('Team')}>
          <img src={team} alt="team" />
          {page === "Team" && <p>Team</p>}
        </div>

        <div onClick={()=>handlePage('Settings')}>
          <img src={settings} alt="settings" />
          {page === "Settings" && <p>Settings</p>}
        </div>
      </div>

      <div>
        <img src={onlineProfile} alt="onlineProfile" />
      </div>
    </div>
  );
};

export default UserNavbar;
