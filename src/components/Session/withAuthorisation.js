import React from "react";

const withAuthorisation = () => Component => {
  class WithAuthorisation extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  return WithAuthorisation;
};

export default withAuthorisation;
