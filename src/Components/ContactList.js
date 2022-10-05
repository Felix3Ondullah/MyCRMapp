import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  //console.log(props)
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const contacts = [
    {
      id: "1",
      "name": "Rosland Andisi",
      "email": "roselandandisi@gmail.com",
      "number": "0714005569",
    },
  ];
  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div class="main">
      <h3> Contact list </h3>
      <div className="ui celled list"> {renderContactList}</div>
    </div>
  );
};
export default ContactList;
