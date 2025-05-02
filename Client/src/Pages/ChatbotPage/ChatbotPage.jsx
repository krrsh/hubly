import React, { useEffect, useState } from "react";
import "./ChatbotPage.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import ChatBot from "../../Components/ChatBot/ChatBot";
import editIcon from "../../assets/editIcon.png";
import saveIcon from "../../assets/saveBtn.png";
import WelcomeMsg from "../../Components/WelcomeMsg/WelcomeMsg";
import { useDispatch, useSelector } from "react-redux";
import { setWelcomeMsg } from "../../Redux/ChatSlice";
import axios from 'axios'

const ChatbotPage = () => {


  
  
  
  
  
  const [docId, setDocId] = useState(null); // store _id to update later
  const dispatch = useDispatch();
  const welcomeMsg = useSelector((state)=> state.chatData.welcomeMsg)
  
  
  const [localMsg, setLocalMsg] = useState("");

useEffect(() => {
  setLocalMsg(welcomeMsg); // sync when welcomeMsg changes from Redux
}, [welcomeMsg]);



useEffect(() => {
  const fetchCustomChatData = async () => {
    try {
      const res = await axios.get("https://hubly-mbkb.onrender.com/api/customChats");
      if (res.data[0]) {
        const data = res.data[0];
        setDocId(data._id); // set id to update later
        dispatch(setWelcomeMsg(data.welcomeMsg));
        setCustomChatDetails({
          welcomeMsg: data.welcomeMsg,
          headingColor: data.headingColor,
          chatSectionColor: data.chatSectionColor,
          initialText: data.initialText,
        });
      } else {
        // Create new one if no data exists
        const newRes = await axios.post("https://hubly-mbkb.onrender.com/api/customChats", {
          welcomeMsg: welcomeMsg,
          headingColor: "#33475B",
          chatSectionColor: "#EEEEEE",
          initialText: "How can I help you?",
        });
        setDocId(newRes.data._id);
      }
    } catch (err) {
      console.error("Error loading chat data:", err);
    }
  };

  fetchCustomChatData();
}, [dispatch]);
























  const[customchatDetails, setCustomChatDetails] = useState({
    welcomeMsg : '',
    headingColor : '#33475B',
    chatSectionColor : '#EEEEEE',
    initialText : '"How can I help you?"',
  })

  const [headerColor, setHeaderColor] = useState("#33475B");
  const [bgColor, setBgColor] = useState("#EEEEEE");
  const [editmode, setEditmode] = useState({
    first: false,
    second: false,
    msg: false,
  });
  const [firstText, setFirstText] = useState({
    first: "How can I help you?",
    second: "Ask me anything!",
  });
  const [userDetails, setUserDetails] = useState({
    name: "Your name",
    phone: "+1(000)000-000",
    email: "example@gmail.com",
  });

  //function to count characters
  const countCharacters = (message) => {
    return (message.trim() !== "") ? message.trim().split(/\s+/).length : 0;
  };

  const maxWords = 50;

  const handleChange = (e) => {
    const inputText = e.target.value;
    const words = inputText.trim().split(/\s+/);
  
    if (words.length <= maxWords) {
      setLocalMsg(inputText); // update local state
    } else {
      const limitedWords = words.slice(0, maxWords).join(" ");
      setLocalMsg(limitedWords);
    }
  };

  //missed timer functions
  const generateValues = (max) =>
    Array.from({ length: max + 1 }, (_, i) => i.toString().padStart(2, "0"));

  const days = generateValues(12);
  const hours = generateValues(12);
  const minutes = generateValues(59);

  const [dayIndex, setHourIndex] = useState(0);
  const [hourIndex, setMinuteIndex] = useState(1);
  const [minuteIndex, setSecondIndex] = useState(0);

  const [dayInput, setHourInput] = useState(days[0]);
  const [hourInput, setMinuteInput] = useState(hours[1]);
  const [minuteInput, setSecondInput] = useState(minutes[0]);

  const wrapIndex = (index, list) => (index + list.length) % list.length;

  const handleClick = (type, direction) => {
    if (type === "day") {
      const newIndex = wrapIndex(dayIndex + direction, days);
      setHourIndex(newIndex);
      setHourInput(days[newIndex]);
    } else if (type === "hour") {
      const newIndex = wrapIndex(hourIndex + direction, hours);
      setMinuteIndex(newIndex);
      setMinuteInput(hours[newIndex]);
    } else if (type === "minute") {
      const newIndex = wrapIndex(minuteIndex + direction, minutes);
      setSecondIndex(newIndex);
      setSecondInput(minutes[newIndex]);
    }
  };

  const handleInputChange = (e, type, list, setIndex, setInput) => {
    const value = e.target.value;
    if (!/^\d{0,2}$/.test(value)) return;

    if (type === "day" && Number(value) > 12) return;
    if ((type === "hour" || type === "minute") && Number(value) > 59) return;

    setInput(value);

    if (value.length === 2) {
      const foundIndex = list.findIndex((v) => v === value);
      if (foundIndex !== -1) {
        setIndex(foundIndex);
      }
    }
  };

  //Posting the customChatDetails


  return (
    <div className="pageContainer">
      <UserNavbar value={"Chatbot"} />
      <div className="chatbotText">
        <p>Chat Bot</p>
      </div>
      <div className="chatBotSection">
        <ChatBot
          headerColor={headerColor}
          bgColor={bgColor}
          firstText={firstText}
          userDetails={userDetails}
        />
        <WelcomeMsg/>
      </div>
      <div className="customizationSectionContainer">
        <div className="customizationSection">
          <p>Header Color</p>
          <div className="colorOptions">
            <div
              onClick={() => setHeaderColor("#FFFFFF")}
              style={{ background: "#FFFFFFF" }}
            ></div>
            <div
              onClick={() => setHeaderColor("#000000")}
              style={{ background: "#000000" }}
            ></div>
            <div
              onClick={() => setHeaderColor("#33475B")}
              style={{ background: "#33475B" }}
            ></div>
          </div>
          <div className="selectedColorContainer">
            <div
              style={{ background: headerColor }}
              className="selectedColor"
            ></div>
            <p className="colorCode">{headerColor}</p>
          </div>
        </div>
        <div className="customizationSection">
          <p>Custom Background Color</p>
          <div className="colorOptions">
            <div
              onClick={() => setBgColor("#EEEEEE")}
              style={{ background: "#EEEEEE" }}
            ></div>
            <div
              onClick={() => setBgColor("#000000")}
              style={{ background: "#000000" }}
            ></div>
            <div
              onClick={() => setBgColor("#FFFFFF")}
              style={{ background: "#FFFFFF" }}
            ></div>
          </div>
          <div className="selectedColorContainer">
            <div
              style={{ background: bgColor }}
              className="selectedColor"
            ></div>
            <p className="colorCode">{bgColor}</p>
          </div>
        </div>
        <div className="messageCustomizationContainer">
          <p>Customize Message</p>
          <div className="messageBox">
            <input
              type="text"
              value={firstText.first}
              readOnly={!editmode.first}
              onChange={(e) =>
                setFirstText({ ...firstText, first: e.target.value })
              }
            />
            {editmode.first ? (
              <img
                className="saveIcon"
                onClick={() => setEditmode({ ...editmode, first: false })}
                src={saveIcon}
                alt="saveIcon"
              />
            ) : (
              <img
                onClick={() => setEditmode({ ...editmode, first: true })}
                src={editIcon}
                alt="editIcon"
              />
            )}
          </div>
          <div className="messageBox">
            <input
              type="text"
              value={firstText.second}
              readOnly={!editmode.second}
              onChange={(e) =>
                setFirstText({ ...firstText, second: e.target.value })
              }
            />
            {editmode.second ? (
              <img
                className="saveIcon"
                onClick={() => setEditmode({ ...editmode, second: false })}
                src={saveIcon}
                alt="saveIcon"
              />
            ) : (
              <img
                onClick={() => setEditmode({ ...editmode, second: true })}
                src={editIcon}
                alt="editIcon"
              />
            )}
          </div>
        </div>
        <div className="introSectionContainer">
          <h6>Introduction Yourself</h6>
          <p>Your name</p>
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            type="text"
            value={userDetails.name}
          />
          <p>Your Phone</p>
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
            type="text"
            value={userDetails.phone}
          />
          <p>Your Email</p>
          <input
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="text"
            value={userDetails.email}
          />
          <button>Thank You!</button>
        </div>
        <div className="customizationSection welcomeMsgSection">
          <p>Welcome Message</p>
          <textarea
            readOnly={!editmode.msg}
            value={localMsg}
            onChange={(e)=>handleChange(e)}
          />
          {editmode.msg ? (
            <img
              className="saveIcon"
              onClick={async () => {
                try {
                  setEditmode({ ...editmode, msg: false });
            
                  await axios.patch(`https://hubly-mbkb.onrender.com/api/customChats/${docId}`, {
                    welcomeMsg,
                  });

                  dispatch(setWelcomeMsg(welcomeMsg))
                  console.log("Welcome message updated");
                } catch (err) {
                  console.error("Error updating welcome message:", err);
                }
              }}
              src={saveIcon}
              alt="saveIcon"
            />
          ) : (
            <img
              className="editIcon"
              onClick={() => setEditmode({ ...editmode, msg: true })}
              src={editIcon}
              alt="editIcon"
            />
          )}
          <p className="count">{countCharacters(welcomeMsg)}/50</p>
        </div>
        <div className="timepickerContainer">
          <p>Missed chat timer</p>
          <div className="time-picker">
            <div className="time-row">
              <div className="column" onClick={() => handleClick("day", -1)}>
                {days[wrapIndex(dayIndex - 1, days)]}
              </div>
              <div className="column" onClick={() => handleClick("hour", -1)}>
                {hours[wrapIndex(hourIndex - 1, hours)]}
              </div>
              <div className="column" onClick={() => handleClick("minute", -1)}>
                {minutes[wrapIndex(minuteIndex - 1, minutes)]}
              </div>
            </div>

            <div className="centerInputRow">
              <input
                value={dayInput}
                onChange={(e) =>
                  handleInputChange(e, "day", days, setHourIndex, setHourInput)
                }
                className="centerInput"
              />
              :
              <input
                value={hourInput}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    "hour",
                    hours,
                    setMinuteIndex,
                    setMinuteInput
                  )
                }
                className="centerInput"
              />
              :
              <input
                value={minuteInput}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    "minute",
                    minutes,
                    setSecondIndex,
                    setSecondInput
                  )
                }
                className="centerInput"
              />
            </div>

            <div className="time-row">
              <div className="column" onClick={() => handleClick("day", 1)}>
                {days[wrapIndex(dayIndex + 1, days)]}
              </div>
              <div className="column" onClick={() => handleClick("hour", 1)}>
                {hours[wrapIndex(hourIndex + 1, hours)]}
              </div>
              <div className="column" onClick={() => handleClick("minute", 1)}>
                {minutes[wrapIndex(minuteIndex + 1, minutes)]}
              </div>
            </div>
          </div>

          <button className="saveTimerBtn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
