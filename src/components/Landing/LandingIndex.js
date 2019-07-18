import React from "react";
import { withStyles } from "@material-ui/core/styles";
import fest1 from "../../assets/fest1.jpg";

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
      <img src={fest1} height="100%" width="100%" alt="festival scene" />
    </div>
  );
}

export default withStyles(styles)(LandingIndex);
