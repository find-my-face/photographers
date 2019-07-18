import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";
import { Button, TextField, Typography } from "@material-ui/core";
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

function PasswordForgetPage() {
  return (
    <div>
      <h1 className="forgottenPasswordTitle">Forgotten Your Password?</h1>
      <PasswordForgetForm />
    </div>
  );
}

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
      <div>
        <Typography variant="h6">Reset your password here:</Typography>
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
      </div>
    );
  }
}

function PasswordForgetLink() {
  return (
    <Typography variant="h6">
      <Link
        to={ROUTES.PASSWORD_FORGET}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Forgotten Your Password?
      </Link>
    </Typography>
  );
}

export default PasswordForgetPage;
const PasswordForgetForm = withStyles(styles)(
  withFirebase(PasswordForgetFormBase)
);

export { PasswordForgetForm, PasswordForgetLink };
