import React from "react";
import { AuthUserContext, withAuthorisation } from "../Session/SessionIndex";
import { PasswordForgetForm } from "../PasswordForget/PasswordForgetIndex";
import PasswordChangeForm from "../PasswordChange/PasswordChangeIndex";
import Photographer2 from "../../assets/photographer2.jpg";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <img
          className="accountImage"
          src={Photographer2}
          alt="photograher"
          width="100%"
          height="100%"
        />

        <div className="changePasswordForm">
          <h1>Account: {authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorisation(condition)(AccountPage);
