import { useState } from "react";
import Persons from "./Persons";
import Notify from "./Notify";
import { PersonForm } from "./PersonFrom";
import reactLogo from "./assets/react.svg";
import { usePersons } from "./persons/custom-hooks";
import "./App.css";

function App() {
  const { data, error, loading } = usePersons();
  const [errorMessage, setErrorMessage] = useState(null);

  const notifyError = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(null), 5000);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Notify errorMessage={errorMessage} />
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
      <PersonForm notifyError={notifyError} />
    </>
  );
}

export default App;
