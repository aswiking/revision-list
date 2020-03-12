import React from 'react';

export default function Entry(props) {

    return <div className='entry'>
    <ul>
      <li><h3>{props.person.name}</h3></li>
      <button onclick={props.toggleEditing}>Edit</button>
      <button>Delete</button>
      <li>Age: {props.person.age}</li>
      <li>Phone: {props.person.phone}</li>
      <li>Email: {props.person.email}</li>
    </ul>
    </div>

};