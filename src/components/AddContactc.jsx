import React, { useState } from 'react'

 const AddContactc = (props) => {
     const [state, setState] = useState({});

     const add = (e) => {
        e.preventDefault();

         
    
        if ( state.name === "" ||  state.email === "") {
          alert("All the fields are mandatory!");
    
          return;
        }
       
        props.addContactHandler(state);
    
        
        setState({ name: "", email: "" });    
      
    
        props.history.push("/");
     }



    return (
        <div className="ui main" style={{marginTop:'2rem' ,maxWidth:'90%',paddingLeft:'2rem'}}>
        <br />

        <h2>Add Contact</h2>

        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) => setState({ ...state, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </div>
          <button className="ui button blue" style={{marginLeft:'2rem'}}>Add</button>
        </form>
        
      </div>
    )
}

export default AddContactc;