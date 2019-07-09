import React from "react";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetIndex";
import PasswordChangeForm from "../PasswordChange/PasswordChangeIndex";

const AccountPage = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
  );
};

export default AccountPage;
