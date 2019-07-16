import React from "react";
import { withAuthorisation } from "../Session/SessionIndex";
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

const HomePage = () => (
  <div className="App">
    <h1>Home Page</h1>
    <h2>Welcome to find my face</h2>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(withStyles(styles)(HomePage));
