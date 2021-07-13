import React from "react";
import { Link } from "react-router-dom";
import contact from "../Images/contact.png";

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;

  // console.log(props);
  return (
    <div className="main" style={{ marginTop: "3.5rem" }}>
      <div className="ui card centered">
        <div className="image" style={{ marginTop: "1.5rem" }}>
          <img src={contact} alt="contact" />
        </div>

        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
     
      <div className="center-div" style={{ textAlign: "center" }}>
      <Link to="/">
        <button className="ui button blue centered">Go to Contacts List</button>
        </Link>
      </div>
    
    </div>
  );
};

export default ContactDetail;
