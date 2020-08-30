import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
//components
import AuthForm from "../authForm/AuthForm";
//mutations
import LoginMutation from "../../mutations/Login";
//queries
import CurrentUserQuery from "../../queries/CurrentUser";
class LoginForm extends Component {
  state = { errors: [] };
  onSubmit = ({ email, password }) => {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query: CurrentUserQuery }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map(({ message }) => message);
        this.setState(() => ({ errors }));
      });
  };
  componentWillUpdate(nextProps) {
    console.log(this.props, nextProps);
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push("/dashboard");
    }
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(CurrentUserQuery)(graphql(LoginMutation)(LoginForm));
