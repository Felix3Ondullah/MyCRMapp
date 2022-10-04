import React from "react";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const App =() =>{
 const contacts =[
  {
    id:"1",
    name:"Rosland Andisi",
    email: "roselandandisi@gmail.com",
    number: "0714005569",
  },
  {
    id:"2",
    name:"Elvis Gatukui",
    email: "elvisgatukui@gmail.com",
    number: "0714695569",
  },
  {
    id:"3",
    name:"Felix Ondullah",
    email: "felixondullah@gmail.com",
    number: "0714175569",
  }
 ];

  return (
    <div className="ui container">
      < Header/>
      < ContactList contacts={contacts}/>
      < AddContact/>
    </div>
    );
  
}

export default App;