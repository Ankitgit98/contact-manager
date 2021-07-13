import React from 'react';
import { Link } from 'react-router-dom';

const DeleteContact = (props) => {
    
    console.log(props.deleteString);

    // alert('Are you sure to delete');

    return (
        <div style={{marginTop:'4rem', textAlign: "center"}}>
            <h1> {props.deleteString} </h1>
            <Link to="/">
        <button className="ui button blue centered">Go to Contacts List</button>
        </Link>
   
        </div>
    )
}
export default DeleteContact;