import React, { useState } from "react";
import "./DashboardPage.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import search from "../../assets/search.png";
import dropdown from '../../assets/dropdown.png'
import johnJoePic from '../../assets/johnJoePic.png'

const DashboardPage = () => {

    const [status, setStatus] = useState('All');

    const handleClick = (status)=>{
        if(status == 'Resolved'){
            setStatus('Resolved')
        }
        else if(status == 'Unresolved'){
            setStatus('Unresolved')
        }
        else
        setStatus('All')
    }

  return (
    <div className="dashboardPageContainer">
      <UserNavbar value={"Dashboard"} />
      <div className="dashboardContentContainer">
        <h4>Dashboard</h4>
        <div className="searcWrapper">
          <img src={search} alt="searchIcon" />
          <input type="text" placeholder="Search fot ticket" />
        </div>
        <div className="ticketStatusContainer">
            <div onClick={()=>handleClick('All')}>
                {status == 'All' && <img src={dropdown} alt="dropdownImg" />}
                <p className={status == 'All' ? 'active' : 'inActive'}>All Tickets</p>
            </div>
            <div onClick={()=>handleClick('Resolved')}>
                {status == 'Resolved' && <img src={dropdown} alt="dropdownImg" />}
                <p className={status == 'Resolved' ? 'active' : 'inActive'}>Resolved</p>
            </div>
            <div onClick={()=>handleClick('Unresolved')}>
                {status == 'Unresolved' && <img src={dropdown} alt="dropdownImg" />}
                <p className={status == 'Unresolved' ? 'active' : 'inActive'}>Unresolved</p>
            </div>
        </div>
        <hr className="lineAfterStatus" />
        <div className="ticketsSection">
            <div className="ticketDetails">
                <div>
                    <div className="dot"></div>
                    <p>Ticket# 2023-00123</p>
                </div>
                <p className="postedAt">Posted at 12:45 AM</p>
            </div>
            <div className="ticketDetails">
                <p className="ticketMessage">Hey!</p>
                <p style={{fontWeight:'500'}}>10:00</p>
            </div>
            <hr className="lineInsideTicketSection"/>
            <div className="userInfoSection">
                <div className="userInfo">
                <img src={johnJoePic} alt="profilePic" />
                <div className="userCredentials">
                    <p>John Snow</p>
                    <p>+91-0000000000</p>
                    <p>example@gmail.com</p>
                </div>
                </div>
                <div>
                    <p className="openTicketLink">Open Ticket</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
