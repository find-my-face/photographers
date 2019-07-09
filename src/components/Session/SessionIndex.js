import React from "react";
import withAuthentication from "./withAuthentication";
import AuthUserContext from "./context";

const SessionIndex = () => {
  return (
    <div>
      <h1> hello from SessionIndex </h1>
    </div>
  );
};

export default SessionIndex;
export { AuthUserContext, withAuthentication };
