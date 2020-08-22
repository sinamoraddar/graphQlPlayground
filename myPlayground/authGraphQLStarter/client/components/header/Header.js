import React, { Component } from "react";
import { graphql } from "react-apollo";
import CurrentUser from "../../queries/CurrentUser";

class Header extends Component {
  renderButtons() {
    const { user, loading } = this.props.data;
    if (loading) {
      return;
    }
    return user ? <div>Logout</div> : <div>You're not signed in</div>;
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">{this.renderButtons.bind(this)}</div>
      </nav>
    );
  }
}

export default graphql(CurrentUser)(Header);
