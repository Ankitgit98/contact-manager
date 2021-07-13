import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// cmd - npm i uuid4  - this package is going to give us the unique id for each of our contact
import api from "../api/contacts";
import { uuid } from "uuidv4";
import Header from "./Header";
// import AddContact from "./AddContact";
import AddContactc from "./AddContactc";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";
// import EditContact from "./EditContact";
import EditContactc from "./EditContact copy";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //RetriveContacts with the help of api's

  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  // // Array objects hard code Passing the value
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Ankit Sharma",
  //     email: "ankitsharma@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "Ankit Gupta",
  //     email: "ankitgupta@gmail.com",
  //   },
  //   {
  //     id: "3",
  //     name: "Aman Sharma",
  //     email: "amansharma@gmail.com",
  //   },
  // ];

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]); // add the data via post call
    // setContacts([...contacts, { id: uuid(), ...contact }]); // (without api call old)  uuid give us id and ...Contacts give us name and email
    // console.log(contact);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    // Delete Function
    const newContactList = contacts.filter((contact) => {
      // we are going to create the copy of contacts
      return contact.id !== id;
    });
    setContacts(newContactList); //change the contact state
  };

  const serachHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else{
      setSearchResults(contacts);
    }
  };

  const deleteString = " Contact Deleted ";

  //retriveing the Data using jsonparse Convert String to js Object

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // passing the data from localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      {/* with Routing */}
      <Router>
        <Header />
        <Switch>
          {/* Now we use Arrow Fun for passing function props */}
          {/* there are two type of routing when we use component base its create compontent every time  */}
          {/* there is one another way which is render fun */}
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={serachHandler}
              />
            )}
          />

          {/* <Route path="/" exact component={() => (<ContactList contacts={contacts} getContactId={removeContactHandler} />) } /> exact prop match the exact url  */}

          {/* <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          /> */}
             <Route
            path="/add"
            render={(props) => (
              <AddContactc {...props} addContactHandler={addContactHandler} />
            )}
          />  
          <Route
            path="/edit"
            render={(props) => (
              <EditContactc
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />

          {/* <Route
            path="/add"
            component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          /> */}
          <Route
            path="/delete"
            render={(props) => (
              <DeleteContact {...props} deleteString={deleteString} />
            )}
          />
          {/* <Route path="/delete" component={DeleteContact}> </Route> */}
        </Switch>

        {/* without Routing  */}

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Router>
    </div>
  );
}

export default App;
