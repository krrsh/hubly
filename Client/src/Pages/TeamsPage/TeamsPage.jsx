import React, { useState } from "react";
import "./TeamsPage.css";
import UserNavbar from "../../Components/UserNavbar/UserNavbar";
import sortIcon from "../../assets/sortIcon.png";
import pic1 from "../../assets/johnJoePic.png";
import editMember from "../../assets/editMember.png";
import deleteMember from "../../assets/deleteMember.png";
import addIcon from "../../assets/addIcon.png";
import ddArrow from "../../assets/downArrow.png";

const TeamsPage = () => {
  const teammatesDetails = [
    {
      name: "Joe Doe",
      phone: "+1 (000) 000-0000",
      email: "example@gmail.com",
      role: "Admin",
    },
    {
      name: "krsh",
      phone: "1234567891",
      email: "krrshh@gmail.com",
      role: "Member",
    },
    {
      name: "David Lynch",
      phone: "91873541 000-23980",
      email: "eraserHead@gmail.com",
      role: "Member",
    },
  ];

  //addMember
  const [adding, setAdding] = useState(false);

  //selecting role while adding member
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Member");

  const handleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  //deletingMember
  const [deletingUser, setDeletingUser] = useState(null);

  const handleDelete = (index) => {
    setDeletingUser(index);
  };
  const handleCancelDelete = () => {
    setDeletingUser(null);
  };
  const handleDeleteUser = () => {
    //logic for deleting the user
    setDeletingUser(null);
  };

  return (
    <div className="teamPage">
      <div className="teamPage">
        <UserNavbar value={"Team"} />
        <div className="teamsContainer">
          <h4>Teams</h4>
          <div className="tableContainer">
            <div className="tableHeadingContainer">
              <p>
                Full Name{" "}
                <span>
                  <img src={sortIcon} alt="SortIcon" />
                </span>
              </p>
              <p>Phone</p>
              <p>Email</p>
              <p>Role</p>
            </div>
            {deletingUser !== null && (
              <div
                className="overlay"
              ></div>
            )}
            {teammatesDetails.map((teamMate, index) => [
              <div key={index} className="teamMatesContainer">
                <img src={pic1} alt="profPic" />
                <p>{teamMate.name}</p>
                <p>{teamMate.phone}</p>
                <p>{teamMate.email}</p>
                <p>{teamMate.role}</p>
                {teamMate.role === "Member" && (
                  <div className="iconsSection">
                    <img src={editMember} alt="editIcon" />
                    <img
                      style={
                        deletingUser === index
                          ? { border: "2px solid #AFAFAF", borderRadius: "5px" }
                          : {}
                      }
                      onClick={() => handleDelete(index)}
                      src={deleteMember}
                      alt="deleteIcon"
                    />
                    {/*Deleting box*/}
                    {deletingUser === index && (
                      <div className="deleteMemberContainer">
                        <div className="warningLine">
                          this teammate will be deleted.
                        </div>
                        <div className="deletebuttonContainer">
                          <button
                            className="popupCancelBtn"
                            onClick={handleCancelDelete}
                          >
                            Cancel
                          </button>
                          <button
                            className="confirmDeleteBtn"
                            onClick={handleDeleteUser}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>,
            ])}
          </div>
          <button onClick={() => setAdding(true)} className="addMemberBtn">
            <span>
              <img src={addIcon} alt="addIcon" />
            </span>
            Add Team members
          </button>
        </div>
      </div>

      {/*Add member box*/}
      {adding && (
        <div className="overlay">
          <div className="addMemberPopupBox">
            <p className="popupHeading">Add Team members</p>
            <p className="popUpDescription">
              Talk with colleagues in a group chat. Messages in this group are
              only visible to it's participants. New teammates may only be
              invited by the administrators.
            </p>
            <p className="popupInputHeaadings">User name</p>
            <input type="text" placeholder="User name" />
            <p className="popupInputHeaadings">Email ID</p>
            <input type="text" placeholder="Email ID" />
            <p className="popupInputHeaadings">Designation</p>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="designationOptionContainer"
            >
              <input type="text" value={selectedRole} readOnly />
              <img
                className={`upArrowIcon ${isOpen ? "rotateUp" : ""}`}
                src={ddArrow}
                alt="DownArrowIcon"
              />
              {isOpen && (
                <div className="roleDDOptions">
                  <p onClick={() => handleSelect("Member")}>Member</p>
                  <p onClick={() => handleSelect("Admin")}>Admin</p>
                </div>
              )}
            </div>
            <div className="cancelSaveBtnContainer">
              <button
                className="popupCancelBtn"
                onClick={() => setAdding(false)}
              >
                Cancel
              </button>
              <button className="popupSaveBtn" onClick={() => setAdding(true)}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsPage;
