import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import api from "../api/contacts";


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

//retrieve contacts
const retrieveContacts = async() => {
  const response = await api.get ("/contacts");
  return response.data;
};


  const addContactHandler = async(contact) => {
    console.log(contact);
    const request = {
      id:nanoid(),
      ...contact
    };


   const response =  await api.post ("./contacts" ,request)
   console.log(response);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      console.log(allContacts)
      if(allContacts) setContacts (allContacts);
    }
    getAllContacts();
    console.log(getAllContacts)
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
};

export default App;
