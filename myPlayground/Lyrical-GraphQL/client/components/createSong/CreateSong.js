import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import { Link } from "react-router";
import query from "../../queries/fetchSongs";

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { title: "" };
  }
  onTitleChange(e) {
    console.log(this.setState);
    e.persist();
    this.setState((prevState) => ({ title: e.target.value }));
  }

  onSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const { mutate } = this.props;

    mutate({
      variables: { title },
      refetchQueries: [{ query }],
    })
      .then(() => {
        hashHistory.push("/");
      })
      .catch((error) => {
        alert("something went wrong");
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new song</h3>
        <form onSubmit={this.onSubmit}>
          <label>
            Song title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(CreateSong);
