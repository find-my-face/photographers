import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation/NavigationIndex";
import LandingPage from "../Landing/LandingIndex";
import SignUpPage from "../SignUp/SignUpIndex";
import SignInPage from "../SignIn/SignInIndex";
import PasswordForgetPage from "../PasswordForget/PasswordForgetIndex";
import HomePage from "../Home/HomeIndex";
import AccountPage from "../Account/AccountIndex";
import AdminPage from "../Admin/AdminIndex";
import "../../App.css";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase/context";

class App extends Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />

          <hr />

          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
