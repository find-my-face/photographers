import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    height: "92vh"
  }
});

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>

    <SignUpForm />
  </div>
);

class SignUpFormBase extends Component {
  state = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null
  };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    event.preventDefault();
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email });
      })

      .then(() => {
        this.setState({
          username: "",
          email: "",
          passwordOne: "",
          passwordTwo: "",
          error: null
        });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      <form className="signUpForm" onSubmit={this.onSubmit}>
        <TextField
          id="username"
          name="username"
          label="Full Name"
          className="nameField"
          type="text"
          value={username}
          onChange={this.onChange}
          margin="normal"
        />
        <TextField
          id="email"
          name="email"
          label="Email Address"
          className="emailField"
          type="text"
          value={email}
          onChange={this.onChange}
          margin="normal"
        />
        <TextField
          id="passwordOne"
          name="passwordOne"
          label="Password"
          className="passwordOneField"
          type="password"
          value={passwordOne}
          onChange={this.onChange}
          margin="normal"
        />
        <TextField
          id="passwordTwo"
          name="passwordTwo"
          label="Confirm Password"
          className="passwordTwoField"
          type="password"
          value={passwordTwo}
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
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    <Link to={ROUTES.SIGN_UP}>Sign Up Here</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default withStyles(styles)(SignUpPage);
export { SignUpForm, SignUpLink };
