import React from "react";
import "./Settings.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import infoIcon from "../../assets/infoIcon.png";

const SettingsPage = () => {
  return (
    <div className="settingsPage">
      <UserNavbar value={"Settings"} />
      <div className="settingsContentContainer">
        <h4>Settings</h4>
        <div className="editProfileContainer">
          <p className="editProfileHeading">Edit Profile</p>
          <hr />
          <div className="editformContainer">
            <div>
              <p>First name</p>
              <input type="text" placeholder="Enter First name" />
            </div>
            <div>
              <p>Last name</p>
              <input type="text" placeholder="Enter Last name" />
            </div>
            <div style={{ position: "relative" }}>
              <p>Email</p>
              <input type="text" placeholder="Enter Email" />
              <div className="tooltipWrapper">
                <img src={infoIcon} alt="InfoIcon" />
                <span className="tooltipText">User will logged out immediately</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <p>Password</p>
              <input type="password" placeholder="Enter Password" />
              <div className="tooltipWrapper">
                <img src={infoIcon} alt="InfoIcon" />
                <span className="tooltipText">User will logged out immediately</span>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <p>Confirm Password</p>
              <input type="password" placeholder="Confirm Password" />
              <div className="tooltipWrapper">
                <img src={infoIcon} alt="InfoIcon" />
                <span className="tooltipText">User will logged out immediately</span>
              </div>
            </div>
          </div>
          <button className="profilesaveBtn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
