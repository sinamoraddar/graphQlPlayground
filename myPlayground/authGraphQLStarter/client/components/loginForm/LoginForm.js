import React, { Component } from "react";
import { graphql } from "react-apollo";
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

export default graphql(LoginForm);
