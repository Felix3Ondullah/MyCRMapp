import React from "react";
import user from "../Components/images/man.png";

function ContactCard(props) {
  const { name, email, number } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header"> {name} </div>
        <div>{email}</div>
        <div>{number}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
      ></i>
    </div>
  );
}
export default ContactCard;