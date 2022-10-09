import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Hidtory replaced by navigate

function EditContact(props) {
  const navigate = useNavigate();
  let location = useLocation();
  const { id, name, email, number } = location.state.contact;
  const [User, setUser] = useState({ id, name, email, number });

  let update = (e) => {
    e.preventDefault();
    if (User.name === "" || User.email === "" || User.number === "") {
      alert("All fields are mandatory!!!");
      return;
    }

    props.updateContactHandler(User);
    setUser({ name: "", email: "", number: "" });
    //console.log(props);
    navigate("/");
  };

  return (
    <div className="ui main">
      <h3>Edit Contact</h3>
      <form className="ui form" onSubmit={update}>
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
          <label>Customer's Email</label>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            value={User.email}
            onChange={(e) => setUser({ ...User, email: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Customer's Number</label>
          <input
            type="text"
            name="Number"
            placeholder="Number"
            value={User.number}
            onChange={(e) => setUser({ ...User, number: e.target.value })}
          />
        </div>
        <button className="ui green button">Update</button>
      </form>
    </div>
  );
}

export default EditContact;
