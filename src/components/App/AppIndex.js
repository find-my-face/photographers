import React from "react";
import { Router } from "@reach/router";
import Navigation from "../Navigation/NavigationIndex";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import "../../App.css";

// import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <LandingPage path="/landing" />
      <SignUpPage path="/signup" />
      <SignInPage path="/signin" />
      <PasswordForgetPage path="/forgottenpassword" />
      <HomePage path="/home" />
      <AccountPage path="/account" />
      <AdminPage path="/admin" />
    </div>
  </Router>
);

export default App;
