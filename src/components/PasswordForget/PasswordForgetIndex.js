import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";
import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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

const PasswordForgetPage = () => (
  <div>
    <h1>Forgotten Your Password?</h1>
    <PasswordForgetForm />
  </div>
);

class PasswordForgetFormBase extends Component {
  state = {
    email: "",
    error: null
  };

  onSubmit = event => {
    const { email } = this.state;
    event.preventDefault();
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ email });
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
    const { email, error } = this.state;
    const isInvalid = email === "";

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
        <Button
          disabled={isInvalid}
          type="submit"
          color="primary"
          variant="contained"
          onClick={this.onSubmit}
        >
          Reset My Password
        </Button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;
const PasswordForgetForm = withStyles(styles)(
  withFirebase(PasswordForgetFormBase)
);

export { PasswordForgetForm, PasswordForgetLink };
