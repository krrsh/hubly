import React from "react";
import "./AnalyticsPage.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import dotsIcon from "../../assets/tripleDots.png";
import Chart from "../../Components/Chart/Chart";

const AnalyticsPage = () => {
  //percentage values
  const percentage = 30;
  const rotateRight = percentage <= 50 ? (percentage / 100) * 360 : 180;
  const rotateLeft = percentage > 50 ? ((percentage - 50) / 100) * 360 : 0;

  return (
    <div className="analyticsPageContainer">
      <UserNavbar value={"Analytics"} />
      <div className="analyticsContent">
        <h4>Analytics</h4>
        <div className="graphContainer">
          <div style={{ marginBottom: "20px" }}>
            <p className="analyticsHeadings">Missed Chats</p>
            <img style={{ cursor: "pointer" }} src={dotsIcon} alt="menuIcon" />
          </div>
          <Chart />
        </div>
        <div className="replyTimeContainer">
          <div>
            <p className="analyticsHeadings">Average Reply time</p>
            <p className="analyticsDescriptions">
              For highest customer satisfaction rates you should aim to reply to
              an incoming customer's message in 15 seconds or less. Quick
              responses will get you more conversations, help you earn customers
              trust and make more sales.
            </p>
          </div>
          <p className="analyticsResults">0 secs</p>
        </div>
        <div className="resolvedTickContainer">
          <div className="resolvedticketPara">
            <p className="analyticsHeadings">Resolved Tickets</p>
            <p className="analyticsDescriptions">
              A callback system on a website, as well as proactive invitations,
              help to attract even more customers. A separate round button for
              ordering a call with a small animation helps to motivate more
              customers to make calls.
            </p>
          </div>

          <div className="circle-wrapper">
            <div style={{backgroundColor:percentage <= 50 ? '#00D907' : '#f0eeee'}} className="circle">
              <div
                className="mask full"
                style={{ transform: `rotate(${rotateRight}deg)`,
                backgroundColor:percentage <= 50 ? '#f0eeee' : '#00D907'}}
              ></div>
              <div
                className="mask half"
                style={{ transform: `rotate(${rotateLeft}deg)` ,
                backgroundColor:percentage <= 50 ? '#f0eeee' : '#00D907'}}
              ></div>
              <div className="inside-circle">{percentage}%</div>
            </div>
          </div>


        </div>
        <div className="totalChatsContainer">
          <div>
            <p className="analyticsHeadings">Total Chats</p>
            <p className="analyticsDescriptions">
              This metric Shows the total number of chats for all Channels for
              the selected the selected period{" "}
            </p>
          </div>
          <p className="analyticsResults">122 Chats</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
