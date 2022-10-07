import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import { nanoid } from "nanoid";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {

  
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [SearchResults, setSearchResults] = useState([]);

  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: nanoid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  //updating contacts
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
   
    const { id, } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  //deleting contacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // retriveing contacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // searching contacts
  const searchHandler = (SearchTerm) => {
    //console.log(SearchTerm);
    setSearchTerm(SearchTerm);
    if (SearchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(SearchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // data storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                contacts={SearchTerm.length < 1 ? contacts : SearchResults}
                getContactId={removeContactHandler}
                term={SearchTerm}
                searchKeyword={searchHandler}
              />
            }
            //render={(props)=><ContactList contacts={contacts} getContactId={removeContactHandler} {...props} />}
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
            //render={(props)=><AddContact {...props} addContactHandler={addContactHandler}/>}
          />
          <Route
            path="/edit"
            element={
              <EditContact updateContactHandler={updateContactHandler} /> }
          />
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler}/> */}
        {/*Here in contact list props are used to get the values in the above contact array*/}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
