import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FestivalScene from "../../assets/FestivalScene.jpg";

const styles = () => ({
  header: {
    flexGrow: 1,
    zIndex: -1,
    display: "block",
    width: "100%"
  }
});

function LandingIndex(props) {
  const { classes } = props;
  return (
    <div className={classes.header}>
      <img src={FestivalScene} alt="festival scene" />
    </div>
  );
}

export default withStyles(styles)(LandingIndex);
