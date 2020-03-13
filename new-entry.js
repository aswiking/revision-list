import React from "react";

export default function NewEntry(props) {
    
  return (
    <form onSubmit={props.submitEntry}>
        <h3>New entry</h3>
      <ul>
        <li>
            <label htmlFor='name'>Name</label>
          <input id='name' type="text"></input>
        </li>
        <li>
            <label htmlFor='age'>Age</label>
          <input id='age' type="text"></input>
        </li>
        <li>
            <label htmlFor='phone'>Phone</label>
          <input id='phone' type="text"></input>
        </li>
        <li>
            <label htmlFor='email'>Email</label>
          <input id='email' type="text"></input>
        </li>
      </ul>
      <button>Submit</button>
    </form>
  );
}
