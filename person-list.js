import React, { useState } from "react";
import cuid from "cuid";
import Entry from "./entry";
import NewEntry from "./new-entry";

export default function PersonList() {
  const [personsData, setPersons] = useState([
    {
      id: 1,
      name: "Rodrigo",
      phone: "0123456789",
      email: "rodrigo@gmail.com",
      age: 23,
      isEditing: false
    },
    {
      id: 2,
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
        id: cuid(),
        name: event.target.name.value,
        phone: event.target.phone.value,
        age: event.target.age.value,
        email: event.target.email.value,
        isEditing: false
      }
    ]);
    event.target.reset();
  }

  function toggleEditing(id) {
    setPersons(
      personsData.map(person => {
        console.log(person.id, id);
        if (person.id === id) {
          return {
            id: id,
            name: person.name,
            phone: person.phone,
            age: person.age,
            email: person.email,
            isEditing: true
          };
        } else {
          return person;
        }
      })
    );
  }

  function deleteEntry(id) {
    setPersons(
      personsData.filter(person => {
        return id !== person.id;
      })
    );
  }

  function updateEntry(event, id) {
    event.preventDefault();
    setPersons.map(person => {
      if ((id = person.id)) {
        return {
          id: person.id,
          name: event.target.name.value,
          phone: event.target.phone.value,
          age: event.target.age.value,
          email: event.target.email.value,
          isEditing: false
        };
      } else {
        return person;
      }
    });
  }

  const list = personsData.map(person => (
    <Entry
      person={person}
      toggleEditing={toggleEditing}
      deleteEntry={deleteEntry}
      updateEntry={updateEntry}
    />
  ));

  return (
    <div>
      {list}
      <NewEntry submitEntry={submitEntry} toggleEditing={toggleEditing} />
    </div>
  );
}
