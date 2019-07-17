import React, { Component } from "react";
import { withFirebase } from "../firebase/FirebaseIndex";
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

class PasswordChangeForm extends Component {
  state = {
    passwordOne: "",
    passwordTwo: "",
    error: null
  };
  onSubmit = event => {
    const { passwordOne, passwordTwo } = this.state;
    event.preventDefault();
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ passwordOne, passwordTwo });
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
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div>
        <Typography variant="h6">Update your password here:</Typography>

        <form onSubmit={this.onSubmit}>
          <TextField
            id="passwordOne"
            name="passwordOne"
            label="Choose a Password"
            type="password"
            value={passwordOne}
            onChange={this.onChange}
            margin="normal"
          />
          <TextField
            id="passwordTwo"
            name="passwordTwo"
            label="Confirm New Password"
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
            Change My Password
          </Button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(withFirebase(PasswordChangeForm));
