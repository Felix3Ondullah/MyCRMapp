import React, {useState} from "react";
import "./App.css"
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const App =() =>{
  const[contacts,setContacts]=useState([]);
const addContactHandler = (contact) =>{
  console.log(contact);
  setContacts([...contacts, contact]);
}
  return (
    <div className="ui container">
      < Header/>
      < ContactList contacts={contacts}/>
      < AddContact addContactHandler = {addContactHandler}/>
    </div>
    );
  
}

export default App;