import React, { Component } from "react";
import { graphql } from "react-apollo";
//components
import AuthForm from "../authForm/AuthForm";
//mutations
import LoginMutation from "../../mutations/Login";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(LoginForm);
