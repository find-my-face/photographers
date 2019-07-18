import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp/SignUpIndex";
import { PasswordForgetLink } from "../PasswordForget/PasswordForgetIndex";
import { withFirebase } from "../firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import fest1 from "../../assets/fest1.jpg";
import logo from "../../assets/DarkFMF.png";

const styles = () => ({
  header: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  }
});

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

class SignInFormBase extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  onSubmit = event => {
    const { email, password } = this.state;
    event.preventDefault();
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email, password });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="signInContainer">
        <img className="logo" src={logo} alt="logo" width="25%" height="25%" />
        <img
          className="welcomeImage"
          src={fest1}
          height="100%"
          width="100%"
          alt="festival scene"
        />
        <div>
          <h1 className="welcomeTitle">Welcome</h1>
          <h2 className="signInTitle">Sign In</h2>
        </div>
        <form className="signInForm" onSubmit={this.onSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email Address"
            type="text"
            value={email}
            onChange={this.onChange}
            margin="normal"
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            margin="normal"
          />
          <Button
            disabled={isInvalid}
            type="submit"
            color="primary"
            variant="contained"
            onClick={this.onSubmit}
          >
            Sign In
          </Button>
          {error && <p>{error.message}</p>}
          <PasswordForgetLink />
          <SignUpLink />
        </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default withStyles(styles)(SignInPage);
export { SignInForm };
