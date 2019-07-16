import React from "react";
import { withAuthorisation } from "../Session/SessionIndex";
import { withStyles } from "@material-ui/core/styles";

import indigo from "@material-ui/core/colors/indigo";

const shade1 = indigo["100"];

const styles = () => ({
  header: {
    background: shade1,
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  }
});

function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <h1>Welcome to find my face</h1>
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(withStyles(styles)(HomePage));
