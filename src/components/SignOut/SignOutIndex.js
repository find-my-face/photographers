import React from "react";
import { withFirebase } from "../firebase/FirebaseIndex";
import { Button } from "@material-ui/core";

const SignOutButton = ({ firebase }) => (
  <Button
    type="button"
    onClick={firebase.doSignOut}
    color="primary"
    variant="contained"
  >
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
