import React, { useEffect, useState } from 'react';
import './WelcomeMsg.css';
import hublyIcon from "../../assets/hublyIcon.png";
import xIcon from "../../assets/x.png";
import { useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { setWelcomeMsg } from '../../Redux/ChatSlice';

const WelcomeMsg = () => {


  const [msgBoxClose, setMsgBoxClose] = useState(false);
  const dispatch = useDispatch();
  const welcomeMsg = useSelector((state)=> state.chatData.welcomeMsg)

  const [customChatDetails, setCustomChatDetails] = useState({
    welcomeMsg: welcomeMsg,
    headingColor: "#33475B",
    chatSectionColor: "#EEEEEE",
    initialText: "How can I help you?",
  });

    // const [docId, setDocId] = useState(null); 


  //  // Fetch custom chat data on component mount
  //  useEffect(() => {
  //   const fetchCustomChatData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4000/api/customChats");
  //       if (res.data[0]) {
  //         const data = res.data[0];
  //         setDocId(data._id); // Set id to update later
  //         dispatch(setWelcomeMsg(data.welcomeMsg)); // Set the welcome message in Redux store
  //         setCustomChatDetails({
  //           welcomeMsg: data.welcomeMsg,
  //           headingColor: data.headingColor,
  //           chatSectionColor: data.chatSectionColor,
  //           initialText: data.initialText,
  //         });
  //       } else {
  //         // Create a new entry if no data exists
  //         const newRes = await axios.post("http://localhost:4000/api/customChats", {
  //           welcomeMsg: welcomeMsg, // Default message from Redux state
  //           headingColor: "#33475B",
  //           chatSectionColor: "#EEEEEE",
  //           initialText: "How can I help you?",
  //         });
  //         setDocId(newRes.data._id);
  //       }
  //     } catch (err) {
  //       console.error("Error loading chat data:", err);
  //     }
  //   };

  //   fetchCustomChatData();
  // }, [dispatch, welcomeMsg]); 


  

  return (
    <>
      {!msgBoxClose && (
        <div className="chatPopupSection">
          <img className="hublyIcon" src={hublyIcon} alt="HublyIcon" />
          <img
            onClick={() => setMsgBoxClose(true)}
            className="xBtn"
            src={xIcon}
            alt="CloseIcon"
          />
          <p>{customChatDetails.welcomeMsg}</p>
        </div>
      )}
    </>
  );
};

export default WelcomeMsg;
