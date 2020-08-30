import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";

//queries
import CurrentUserQuery from "../../../queries/CurrentUser";
export default (wrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.data.loading && !nextProps.data.user) {
        hashHistory.push("/login");
      }
    }
    render() {
      return <wrappedComponent {...this.props} />;
    }
  }

  return graphql(CurrentUserQuery)(RequireAuth);
};
