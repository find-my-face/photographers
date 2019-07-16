import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { SignUpLink } from "../SignUp/SignUpIndex";
import { PasswordForgetLink } from "../PasswordForget/PasswordForgetIndex";
import { withFirebase } from "../firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";
import { Button, TextField } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     zIndex: 1,
//     overflow: "hidden",
//     position: "relative",
//     display: "flex",
//     width: "100%"
//   },
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing(3),
//     height: "92vh"
//   }
// });

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
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
      <form onSubmit={this.onSubmit}>
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
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;
export { SignInForm };
