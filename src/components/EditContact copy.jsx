import React, { useEffect, useState } from "react";

  const EditContactc = (props) =>  {
  
    const [state, setState] = useState({})
    
    
    
    useEffect(() => {
      const { id, name, email } = props.location.state.contact;
      setState({
        id,
        name, 
        email
      })
   
    }, [])


   





  const update = (e) => {
    e.preventDefault();

    //using for empty form

    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");

      return;
    }
    // get this data form app
    props.updateContactHandler(state);

    //for clear this form fields
    setState({ name: "", email: "" });

    // using Conditional Router For redirects the page after click the (add) button

    props.history.push("/");

    // get objectArrray - console.log(state);
  };

  
    return (
      <div
        className="ui main"
        style={{ marginTop: "4rem", maxWidth: "90%", paddingLeft: "2rem" }}
      > 


        <h2>Edit Contact</h2>

        <form className="ui form" onSubmit={update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) => setState({...state,name: e.target.value })}
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
          <button className="ui button blue" style={{ marginLeft: "2rem" }}>
            Update
          </button>
        </form>
      </div>
    );
  }
 

export default EditContactc;
