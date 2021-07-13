import React from "react";
import { Link } from "react-router-dom";

// import user from '../Images/user.png'

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <i className="user outline icon"></i>
      {/* <img className="ui avatar image " src={user} alt="user-icon" /> */}
      <div className="content">
        <Link
          to={ {pathname:`/contact/${id}`,state:{contact: props.contact} }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <Link to="/delete">
      <i
        className="trash alternate outline icon "
        style={{ color: "red",marginLeft:'99%'}}
        onClick={() => props.clickHandler(id)} //  passing as props from Contactlist
      ></i>
      </Link>

      <Link
          to={ {pathname:`/edit`,state:{contact: props.contact} }}
        >
      <i
        className="edit alternate outline icon "
        style={{ color: "blue"}}
       
      ></i>
      </Link>
       

     
    </div>
  );
};

export default ContactCard;
