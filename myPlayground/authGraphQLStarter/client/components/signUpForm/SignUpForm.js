import React, { Component } from "react";
import { graphql } from "react-apollo";
//components
import AuthForm from "../authForm/AuthForm";
//mutations
import SignUpMutation from "../../mutations/SignUp";

class SignUpForm extends Component {
  state = { errors: [] };
  onSubmit = ({ email, password }) => {
    this.props.mutate({ variables: { email, password } });
  };
  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(SignUpMutation)(SignUpForm);
