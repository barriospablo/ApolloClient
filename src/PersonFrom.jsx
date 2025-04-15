import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      phone
      address {
        city
        street
      }
      id
    }
  }
`;

export const PersonForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [createPerson] = useMutation(CREATE_PERSON);

  const handleSubmit = (e) => {
    e.preventDefault();

    createPerson({ variables: { name, phone, street, city } });

    setName("");
    setPhone("");
    setStreet("");
    setCity("");
  };

  return (
    <div>
      <h2>Create new person</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
        />
        <input
          placeholder="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="text"
        />
        <input
          placeholder="street"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          type="text"
        />
        <input
          placeholder="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          type="text"
        />
        <button>add person</button>
      </form>
    </div>
  );
};
