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
    return (
      <div className="row">
        <form className="col s6">
          <div className="input-field">
            <label>Email</label>
            <input value={this.state.email} onChange={this.onEmailChange} />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
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
