import React from "react";
import "./Hero.css";
import Play from "../../assets/PlayBtn.png";
import HeroImg from '../../assets/heroImg.png';
import CalenderImg from '../../assets/CalendarImg.png';
import graphImg from '../../assets/graphImg.png';
import profileImg from '../../assets/profileImg.png';
import rightArrow from '../../assets/rightArrow.png'
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="heroContainer">
      <div className="heroTextContainer">
        <h1>Grow Your Business Faster with Hubly CRM</h1>
        <p>
          Manage leads, automate workflows, and close deals effortlessly—all in
          one powerful platform.
        </p>
        <div className="buttonContainer">
          <button onClick={()=>navigate('/dashboard')} className="getStartedBtn">Go to Dashboard <span><img src={rightArrow} alt="rightArrow" /></span></button>
          <button className="watchvidBtn">
            <span>
              <img src={Play} alt="PlayBtn" />
            </span>
            Watch Video
          </button>
        </div>
      </div>
      <div className="imageContainer">
        <img className="heroImg" src={HeroImg} alt="HeroImg" />
        <div>
          <img className="calender" src={CalenderImg} alt="CalenderImg" />
          <img className="graph" src={graphImg} alt="graphImg" />
          <img className="profile" src={profileImg} alt="ProfileImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
