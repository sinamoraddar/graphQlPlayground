import React from "react";
import { graphql } from "react-apollo";
import addLyricToSong from "../../queries/addLyricToSong";

class LyricCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.onLyricChange = this.onLyricChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onLyricChange(e) {
    this.setState({ content: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { mutate, songId } = this.props;

    const { content } = this.state;
    mutate({ variables: { content, songId } })
      .then(() => {
        this.setState({ content: "" });
      })
      .catch((error) => {
        alert("something went wrong");
        console.log(error);
      });
  }
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Add a lyric
          <input
            type="text"
            onChange={this.onLyricChange}
            value={this.state.content}
          />
        </label>
      </form>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
