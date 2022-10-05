import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    number: "",
  };
  add =(e)=>{
    e.preventDefault();
    if(this.state.name === "" && this.state.email ==="" )
{
    alert ("Fill all the field please!")
    return
}  
this.props.addContactHandler(this.state)
this.setState({name:"", email:"", number:""});
// console.log(this.state);
}
  render(){
  return (
    <div className="ui main">
      <h3>Add Contact</h3>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label> Customer's Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Customer's Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Customer's Number</label>
          <input
            type="text"
            name="number"
            placeholder="Number"
            value={this.state.number}
            onChange={(e) => this.setState({ number: e.target.value })}
          />
         
        </div>
        <button className="ui button red"> Add</button>
      </form>
    </div>
  );
};
}
export default AddContact;
