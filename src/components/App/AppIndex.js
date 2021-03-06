import React from "react";
import "../../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "typeface-roboto";
import Navigation from "../Navigation/NavigationIndex";
import SignUpPage from "../SignUp/SignUpIndex";
import SignInPage from "../SignIn/SignInIndex";
import PasswordForgetPage from "../PasswordForget/PasswordForgetIndex";
import HomePage from "../Home/HomeIndex";
import AccountPage from "../Account/AccountIndex";
import AlbumsIndex from "../Albums/AlbumsIndex";
import { withAuthentication } from "../Session/SessionIndex";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ALBUMS} component={AlbumsIndex} />
      </div>
    </Router>
  );
}

export default withAuthentication(App);
