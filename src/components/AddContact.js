import React from "react";


class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();

    //using for empty form

    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");

      return;
    }
    // get this data form app
    this.props.addContactHandler(this.state);

    //for clear this form fields
    this.setState({ name: "", email: "" });

    // using Conditional Router For redirects the page after click the (add) button

    this.props.history.push("/");

    // get objectArrray - console.log(this.state);
  };

  render() {
    return (
      <div className="ui main" style={{marginTop:'2rem' ,maxWidth:'90%',paddingLeft:'2rem'}}>
        <br />

        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" style={{marginLeft:'2rem'}}>Add</button>
        </form>
        
      </div>
    );
  }
}

export default AddContact;
