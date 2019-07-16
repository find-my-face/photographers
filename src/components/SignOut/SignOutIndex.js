import React from "react";
import { withFirebase } from "../firebase/FirebaseIndex";
import { Button } from "@material-ui/core";
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
