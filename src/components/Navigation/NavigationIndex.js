import React from "react";
import { Link } from "@reach/router";
// import * as ROUTES from "../../constants/routes";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
