import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import Persons from "./Persons";

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(ALL_PERSONS);

  return (
    <>
      <div>
        {/* <a href="https://react.dev" target="_blank"> */}
        <img src={reactLogo} className="logo react" alt="React logo" />
        {/* </a> */}
      </div>
      {loading ? (
        <p>Cargando</p>
      ) : (
        <div>
          <h1>React + Graphql</h1>
          {data && <Persons persons={data.allPersons} />}
        </div>
      )}
    </>
  );
}

export default App;
