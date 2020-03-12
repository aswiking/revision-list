import React, { useState } from "react";
import Entry from "./entry";
import NewEntry from "./new-entry";

export default function PersonList() {
  const [personsData, setPersons] = useState([
    {
      name: "Rodrigo",
      phone: "0123456789",
      email: "rodrigo@gmail.com",
      age: 23,
      isEditing: false
    },
    {
      name: "Eustace",
      phone: "067890123456",
      email: "eustace@gmail.com",
      age: 42,
      isEditing: false

    }
  ]);

  function submitEntry(event) {
    event.preventDefault();
    setPersons([
      ...personsData,
      {
        name: event.target.name.value,
        phone: event.target.phone.value,
        age: event.target.age.value,
        email: event.target.email.value,
        isEditing: false
      }
    ]);
   event.target.reset();
  };

  function toggleEditing(event) {

  };

  const list = personsData.map(person => <Entry person={person} />);

  return (
    <div>
      {list}
      <NewEntry submitEntry={submitEntry} toggleEditing={toggleEditing} />
    </div>
  );
}
