import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOutIndex";
import * as ROUTES from "../../constants/routes";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { AuthUserContext } from "../Session/SessionIndex";

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

const Navigation = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Typography>
    <Link
      to={ROUTES.HOME}
      style={{
        textDecoration: "none",
        color: "inherit"
      }}
    >
      Home
    </Link>

    <Link
      to={ROUTES.ACCOUNT}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Account
    </Link>

    <Link
      to={ROUTES.IMAGEUPLOAD}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Upload Images
    </Link>

    <SignOutButton />
  </Typography>
);

const NavigationNonAuth = () => (
  <Typography>
    <Link
      to={ROUTES.SIGN_IN}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Sign In
    </Link>

    <Link to={ROUTES.HOME} style={{ textDecoration: "none", color: "inherit" }}>
      Home
    </Link>

    <Link
      to={ROUTES.ACCOUNT}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Account
    </Link>

    <Link
      to={ROUTES.IMAGEUPLOAD}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      Upload Images
    </Link>

    <SignOutButton />
  </Typography>
);

export default withStyles(styles)(Navigation);
