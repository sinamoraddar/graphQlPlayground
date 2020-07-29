import React, { Component } from "react";
class LyricList extends Component {
  handleThumbsUp({ id }) {
    alert(`liked ${id}`);
  }
  renderLyrics() {
    return this.props.lyrics.map(({ content, id }) => (
      <li key={id} className="collection-item">
        {content}
        <i
          onClick={this.handleThumbsUp.bind(this, { id })}
          className="material-icons"
        >
          thumb_up
        </i>
      </li>
    ));
  }
  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
