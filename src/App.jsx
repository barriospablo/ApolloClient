import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
    }
  }
`;

function App() {
  const result = useQuery(ALL_PERSONS);
  console.log(result);

  return (
    <>
      <div>
        {/* <a href="https://react.dev" target="_blank"> */}
        <img src={reactLogo} className="logo react" alt="React logo" />
        {/* </a> */}
      </div>
      <h1>React + Graphql</h1>
      <p>hola</p>
    </>
  );
}

export default App;
