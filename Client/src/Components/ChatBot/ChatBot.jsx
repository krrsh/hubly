import React from "react";
import "./ChatBot.css";
import hublyIconStatus from "../../assets/Icon_status.png";
import hublyIcon from "../../assets/hublyIcon.png";
import sendBtn2 from "../../assets/sendBtn2.png";

const ChatBot = ({ headerColor, bgColor, firstText, userDetails, className  }) => {
  return (
    <div className={`chatBotContainer ${className || ''} `}>
      <div
        style={{
          background: headerColor,
          border:
            headerColor == "#FFFFFF" ? "1px solid rgba(0, 0, 0, 0.18)" : "none",
        }}
        className="chatHeadingContainer"
      >
        <img src={hublyIconStatus} alt="HublyIcon" />
        <p style={{ color: headerColor == "#FFFFFF" ? "#000000" : "#FFFFFF" }}>
          Hubly
        </p>
      </div>
      <div
        style={{
          background: bgColor,
          border:
            bgColor == "#FFFFFF" ? "1px solid rgba(0, 0, 0, 0.18)" : "none",
        }}
        className="centerChatSection"
      >
        {firstText.first && (
          <div className="firstTextDisplayed">
            <img src={hublyIcon} alt="HublyIcon" />
            <p
              style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
              className="cha1"
            >
              {firstText.first}
            </p>
          </div>
        )}
        {firstText.second && (
          <p
            style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
            className="chat2"
          >
            {firstText.second}
          </p>
        )}
        <div
          style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
          className="introSection"
        >
          <h6>Introduction Yourself</h6>
          <p>Your name</p>
          <input
            style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
            type="text"
            placeholder={userDetails.name}
          />
          <p>Your Phone</p>
          <input
            style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
            type="text"
            placeholder={userDetails.phone}
          />
          <p>Your Email</p>
          <input
            style={{ background: bgColor == "#FFFFFF" && "#EEEEEE" }}
            type="text"
            placeholder={userDetails.email}
          />
          <button>Thank You!</button>
        </div>
      </div>
      <div className="inputChatSection">
        <input type="text" placeholder="Write a message" />
        <img src={sendBtn2} alt="SendBtn" />
      </div>
    </div>
  );
};

export default ChatBot;
