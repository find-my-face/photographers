import React from "react";
import { withAuthorisation } from "../Session/SessionIndex";

const HomePage = () => (
  <div className="App">
    <h1>Home Page</h1>
    <h2>Welcome to find my face</h2>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(HomePage);
