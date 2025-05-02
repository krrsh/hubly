import React, { useState } from "react";
import "./ContactPage.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import johnJoe from "../../assets/johnJoePic.png";
import homeImg from "../../assets/dashboard.png";
import sendIcon from "../../assets/sendBtn.png";
import nameIcon from "../../assets/nameIcon.png";
import phone from "../../assets/phone.png";
import messageIcon from "../../assets/messageIcon.png";
import joedoe from "../../assets/joedoe.png";
import ticket from "../../assets/ticket.png";
import downArrow from "../../assets/downArrow.png";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [chatNum, setChatNum] = useState("1");
  const navigate = useNavigate();

  const teammatesArr = ['Joe Doe', 'John Paul', 'Arun', 'Krsh']
  const [openStatus, setOpenStatus] = useState(false);
  const [openTeammates, setOpenTeammates] = useState(false);

  return (
    <div className="contactPageContainer">
      <UserNavbar value={"Contact"} />
      <div className="contactPageContentContainer">
        <div className="chatContainer">
          <h4>Contact Center</h4>
          <p className="chatsText">Chats</p>
          <hr className="lineAfterChat" />
          <div className="chatsSection">
            <div
              style={{ backgroundColor: chatNum === "1" ? "#e8e5e5" : "white" }}
              onClick={() => setChatNum("1")}
              className="userSection"
            >
              <img src={johnJoe} alt="profilePic" />
              <div>
                <p className="chatNum">Chat 1</p>
                <p className="textMessage">I have a question</p>
              </div>
            </div>
            <div
              style={{ backgroundColor: chatNum === "2" ? "#e8e5e5" : "white" }}
              onClick={() => setChatNum("2")}
              className="userSection"
            >
              <img src={johnJoe} alt="profilePic" />
              <div>
                <p className="chatNum">Chat 2</p>
                <p className="textMessage">Ask me anything</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ticketContainer">
          <div className="ticketHeadingSection">
            <p>Ticket# 2025-00123</p>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/dashboard")}
              src={homeImg}
              alt="homeImg"
            />
          </div>
          <div className="messageSection">
            <div className="lineOnDate">
              <p>March 7, 2025</p>
              <hr />
            </div>
            <div className="profileSectionOnMessage">
              <img src={johnJoe} alt="profilePic" />
              <div>
                <p className="chatNum">Chat 1</p>
                <p className="textMessage">I have a question</p>
              </div>
            </div>
            <textarea className="textArea" placeholder="type here"></textarea>
            <img className="sendBtn" src={sendIcon} alt="sendBtn" />
          </div>
        </div>
        <div className="profileContainer">
          <div className="imgContainer">
            <img src={johnJoe} alt="profilePic" />
            <p>Chat</p>
          </div>
          <h4>Details</h4>
          <div className="personalDataContainer">
            <div className="personalData">
              <img src={nameIcon} alt="nameIcon" />
              <p>Joe doe</p>
            </div>
            <div className="personalData">
              <img src={phone} alt="phoneIcon" />
              <p>+1(000) 000-0000</p>
            </div>
            <div className="personalData">
              <img src={messageIcon} alt="messageIcon" />
              <p>example@gmail.com</p>
            </div>
          </div>
          <h4>Teammates</h4>
          <div onClick={()=> setOpenTeammates(!openTeammates)} className="teammatesSection">
            <div className="personalData">
              <img src={joedoe} alt="ProfilePic" />
              <p>Joe Doe</p>
            </div>
            <img className="ddArrow" src={downArrow} alt="dropDwnIcon" />
          </div>
          <div className={`teammatesOptions ${openTeammates ? 'show' : ''}`}>
  <ul>
    {
      teammatesArr.map((mates, index)=> <li key={index}><div><img src={joedoe} alt="ProfilePic" /><p>{mates}</p></div></li>
      )
    }
  </ul>
</div>
          <div onClick={()=>setOpenStatus(!openStatus)} className="teammatesSection">
            <div className="personalData">
              <img style={{ height: "20px" }} src={ticket} alt="ticketIcon" />
              <p>Ticket status</p>
            </div>
            <img className="ddArrow" src={downArrow} alt="dropDwnIcon" />
          </div>
          <div className={`ticketStatusOptions ${openStatus ? 'show' : ''}`}>
            <p className="resolved">Resolved</p>
            <p className="unresolved">Unresolved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
