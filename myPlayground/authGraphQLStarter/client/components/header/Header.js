import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
//queries
import CurrentUser from "../../queries/CurrentUser";
//mutations
import LogoutMutation from "../mutations/Logout";

class Header extends Component {
  handleLogout = (e) => {
    this.props.mutate({ refetchQueries: [{ query: CurrentUser }] });
  };
  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) {
      return;
    }
    return user ? (
      <li>
        <a onClick={this.handleLogout}>Log out</a>
      </li>
    ) : (
      <>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </>
    );
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons.bind(this)}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(LogoutMutation)(graphql(CurrentUser)(Header));
