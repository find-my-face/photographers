import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOutIndex";
import * as ROUTES from "../../constants/routes";
import { withStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthUserContext } from "../Session/SessionIndex";

const styles = theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer>
    </div>
  );
}

function NavigationAuth(props) {
  // const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" /*className={classes.title}*/>
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
          </Typography>
          <SignOutButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

function NavigationNonAuth(props) {
  // const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography>
            <Link
              to={ROUTES.SIGN_IN}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign In
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);
