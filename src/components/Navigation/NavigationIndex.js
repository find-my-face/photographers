import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut/SignOutIndex";
import * as ROUTES from "../../constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AuthUserContext } from "../Session/SessionIndex";
import indigo from "@material-ui/core/colors/indigo";

const shade1 = indigo["100"];
const shade2 = indigo["900"];

const useStyles = makeStyles(theme => ({
  root: {
    background: `linear-gradient(45deg, ${shade1}, ${shade2} 90%)`,
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1
  }
}));

function Navigation(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
      </AuthUserContext.Consumer>
    </div>
  );
}

function NavigationAuth() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        edge="end"
        className={classes.menuButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Typography>
            <Link
              to={ROUTES.HOME}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>
            <Link
              to={ROUTES.ACCOUNT}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Account
            </Link>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography>
            <Link
              to={ROUTES.IMAGEUPLOAD}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Upload Images
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
      <SignOutButton color="inherit" />
    </div>
  );
}

function NavigationNonAuth() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Typography>
            <Link
              to={ROUTES.SIGN_IN}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sign In
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navigation;
