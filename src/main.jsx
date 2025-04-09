import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000", //esto vendria del .env
  }),
});

const query = gql`
  query {
    allPersons {
      name
      phone
    }
  }
`;
client.query({ query }).then((res) => {
  console.log(res.data);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
