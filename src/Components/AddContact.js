import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//replacing usehistory with usenavigate

function AddContact(props) {
  const navigate = useNavigate();
  const [User, setUser] = useState({ name: "", email: "", number: "" });

  let add = (e) => {
    e.preventDefault();
    if (User.name === "" || User.email === "" || User.number === "") {
      alert("Fill all the field please!!");
      return;
    }

    props.addContactHandler(User);
    setUser({ name: "", email: "", number: "" });
    //console.log(props);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Customer's Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Name"
            value={User.name}
            onChange={(e) => setUser({ ...User, name: e.target.value })}
          />
        </div>
        <div className="field">
          <label> Cutomer's Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={User.email}
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label> Cutomer's Number</label>
          <input
            type="text"
            name="Number"
            placeholder="Number"
            value={User.number}
            onChange={(e) => setUser({ ...User, number: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddContact;
