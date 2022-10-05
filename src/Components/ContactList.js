import React, { useRef } from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  //console.log(props)
  const inputElement = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    // console.log(inputElement);
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div class="main">
      <h3> Contact list </h3>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {" "}
        {renderContactList.length > 0
          ? renderContactList
          : "No Contact Availabe"}
      </div>
    </div>
  );
};
export default ContactList;
