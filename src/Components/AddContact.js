import React from "react";

const AddContact = () => {
  return (
    <div className="ui main">
      <h2> Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label> Customer's Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <label>Customer's Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="field">
          <label>Customer's Number</label>
          <input type="text" name="number" placeholder="Number" />
        </div>
        <button className="ui button red"> Add</button>
      </form>
    </div>
  );
};
export default AddContact;