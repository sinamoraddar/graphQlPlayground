import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyricById from "../../queries/likeLyricById";
class LyricList extends Component {
  handleThumbsUp({ id, likes }) {
    const { mutate } = this.props;
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: "LyricType",
        },
      },
    }).catch((error) => {
      alert("something went wrong");
      console.log(error);
    });
  }
  renderLyrics() {
    return this.props.lyrics.map(({ content, id, likes }) => (
      <li key={id} className="collection-item">
        {content}
        <div className="vote-box">
          <i
            onClick={this.handleThumbsUp.bind(this, { id, likes })}
            className="material-icons"
          >
            thumb_up
          </i>
          {likes}
        </div>
      </li>
    ));
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default graphql(likeLyricById)(LyricList);
