import React, {useState,useEffect} from "react";
import "./App.css"
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const App =() =>{
  const LOCAL_STORAGE_KEY = "contacts"
  const[contacts,setContacts]=useState([]);
const addContactHandler = (contact) =>{
  console.log(contact);
  setContacts([...contacts, contact]);
};
useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))

},[contacts]);
  return (
    <div className="ui container">
      < Header/>
      < ContactList contacts={contacts}/>
      < AddContact addContactHandler = {addContactHandler}/>
    </div>
    );
  
}

export default App;