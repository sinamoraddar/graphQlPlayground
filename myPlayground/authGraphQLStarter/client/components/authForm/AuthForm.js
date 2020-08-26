import React, { Component } from "react";
class AuthForm extends Component {
  render() {
    state = { email: "", password: "" };
    onEmailChange = (e) => {
      this.setState(() => ({ email: e.target.value }));
    };
    onPasswordChange = (e) => {
      this.setState(() => ({ password: e.target.value }));
    };
    onSubmit = (event) => {
      event.preventDefault();
      const { email, password } = this.state;
      this.props.onSubmit({ email, password });
    };
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div className="input-field">
            <input
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="errors">
            {this.props.errors.map((error) => (
              <div style={{ color: "red" }} key={error}>
                {error}
              </div>
            ))}
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
