import React from 'react';

export default function Entry(props) {
if (props.person.isEditing) {
    return <div className='editing'>
    <form onSubmit={(event) => props.updateEntry(event, props.person.id)}>
        <h3>{props.person.name}</h3>
      <ul>
        <li>
            <label htmlFor='age'>Age</label>
          <input id='age' type="text" placeholder={props.person.age}></input>
        </li>
        <li>
            <label htmlFor='phone'>Phone</label>
          <input id='phone' type="text" placeholder={props.person.phone}></input>
        </li>
        <li>
            <label htmlFor='email'>Email</label>
          <input id='email' type="text" placeholder={props.person.email}></input>
        </li>
      </ul>
      <button>Confirm</button>
    </form>
    </div>
} else {
    return <div className='entry'>
    <ul>
      <li><h3>{props.person.name}</h3></li>
      <button onClick={() => props.toggleEditing(props.person.id)}>Edit</button>
      <button onClick={() => props.deleteEntry(props.person.id)}>Delete</button>
      <li>Age: {props.person.age}</li>
      <li>Phone: {props.person.phone}</li>
      <li>Email: {props.person.email}</li>
    </ul>
    </div>}

};