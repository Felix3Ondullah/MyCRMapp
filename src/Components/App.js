import React, {useState} from "react";
import "./App.css"
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const App =() =>{
  const[contacts,setContacts]=useState([]);

  return (
    <div className="ui container">
      < Header/>
      < ContactList contacts={contacts}/>
      < AddContact/>
    </div>
    );
  
}

export default App;