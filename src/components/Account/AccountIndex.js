import React from "react";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetIndex";
import PasswordChangeForm from "../PasswordChange/PasswordChangeIndex";
import { withAuthorisation } from "../Session/SessionIndex";

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const condition = authUser => !authUser;

export default withAuthorisation(condition)(AccountPage);
