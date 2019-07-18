import React from "react";
import { withFirebase } from "../firebase/FirebaseIndex";
import { Button } from "@material-ui/core";
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

function SignOutButton({ firebase }) {
  return (
    <Button
      className="signOutButton"
      type="button"
      onClick={firebase.doSignOut}
      color="primary"
      variant="contained"
    >
      Sign Out
    </Button>
  );
}

export default withStyles(styles)(withFirebase(SignOutButton));
