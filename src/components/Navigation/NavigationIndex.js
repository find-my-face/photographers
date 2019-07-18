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

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(3),
    color: theme.palette.common.white
  },
  title: {
    flexGrow: 1
  }
}));

function Navigation(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      position="static"
      style={{
        background: "transparent !important",
        boxShadow: "none",
        marginBottom: "-50px",
        zIndex: "99"
      }}
    >
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
              to={ROUTES.ALBUMS}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Albums
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
      <SignOutButton color="inherit" />
    </div>
  );
}

function NavigationNonAuth() {
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
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menuButton}
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
