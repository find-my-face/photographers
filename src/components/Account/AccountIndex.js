import React from "react";
import { AuthUserContext, withAuthorisation } from "../Session/SessionIndex";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetIndex";
import PasswordChangeForm from "../PasswordChange/PasswordChangeIndex";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(AccountPage);
