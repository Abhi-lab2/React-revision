import React from "react";

const ContactCard = ({ id, profilePic, name, email, phone, onHide }) => {
  return (
    <div
      style={{
        display: "flex-box",
        padding: "1rem",
        border: "1px solid black",
        marginBottom: "0.25rem",
        gap: "1rem",
      }}
    >
      <div>
        {profilePic} {" "} {name} <br /> {"  "} {email} <br /> {" "} {phone}
      </div>
      <button onClick={() => onHide(id)}>Delete</button>
    </div>
  );
};

export default ContactCard;