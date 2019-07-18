import React from "react";
import { withAuthorisation } from "../Session/SessionIndex";
import { withStyles } from "@material-ui/core/styles";
import Photographer from "../../assets/Woman-Photographer-Photograph-Background-Wallpaper-1659515.jpg";
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
      <h1>Welcome</h1>
      <img src={Photographer} alt="photographer" width="100%" height="100%" />
    </div>
  );
}

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(withStyles(styles)(HomePage));
