import React from "react";
import { Link } from "react-router-dom";
import icon from "../Components/Images/man.png";

function ContactCard(props) {
  const { id, name, email, number } = props.contact;
  console.log(props.contact);
  return (
    <div className="item">
      <img className="ui avatar image" src={icon} alt="icon" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name} </div>
          <div>{email}</div>
          <div>{number}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon right floated"
        style={{ color: "red", fontSize: "20px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon right floated"
          style={{ color: "green", fontSize: "20px" }}
        ></i>
      </Link>
    </div>
  );
}

export default ContactCard;
