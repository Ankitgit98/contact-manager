import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  console.log(props);
  const inputElement = useRef("");

  const deleteContactHandler = (id) => {
    // get the id from the ContactCard
    props.getContactId(id); // get the id from apps as props
  };

  const renderContactList = props.contacts.map((contact) => {
    // when we use contact.id in key we can delete id from here
    return (
      <ContactCard
        // key={id} // with the help of uuid we don't assign in map index or id we simply put this
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    ); //passing and getting props vlaues
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <>
      <div className="main">
        <h2
          style={{ color: "skyblue", textAlign: "center", marginTop: "3rem" }}
        >
          Contact List
        </h2>

        <div style={{ display: "flex" }}>
          {/* "(TO) prop are taking a path" - it's Clickable link so we can put any where  */}
          <Link to="/add">
            <button className="ui button blue" style={{ marginLeft: "2rem" }}>
              Add Contact
            </button>
          </Link>
          <div className="ui search" style={{ marginLeft: "50%" }}>
            <div className="ui icon input">
              <input
                ref={inputElement}
                type="text"
                placeholder="Search Contacts"
                className="prompt"
                value={props.term}
                onChange={getSearchTerm}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
        <div style={{marginLeft:'1rem'}} className="ui celled list">           
          {renderContactList.length > 0
            ? renderContactList
            : "No Contact In List"}
        </div>
      </div>
    </>
  );
};

export default ContactList;
