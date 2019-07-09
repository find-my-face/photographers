import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase/FirebaseIndex";
import * as ROUTES from "../../constants/routes";

const withAuthorisation = condition => Component => {
  class WithAuthorisation extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(ROUTES.SIGN_IN);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorisation);
};

export default withAuthorisation;
