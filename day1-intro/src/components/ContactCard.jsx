import React, { useState } from "react";
import card from "./module.css";

const ContactCard = ({ id, profilePic, name, email, phone, onHide }) => {
  // const [contactCard, toggleCard] = UseCardToggle()
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex-box",
          padding: "1rem",
          border: "1px solid black",
          marginBottom: "0.25rem",
          gap: "1rem",
        }}
      >
        <div className={card} onClick={() => setToggle(!toggle)}> Click to show details
          <div className={profilePic}>{profilePic}</div>
          <div>
            <div className={name}>{name}</div>

            <div className={email}>{email}</div>
            {toggle ? <div className={phone}>{phone}</div> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
