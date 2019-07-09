import React from "react";
import { withAuthorisation } from "../Session/SessionIndex";

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(HomePage);
