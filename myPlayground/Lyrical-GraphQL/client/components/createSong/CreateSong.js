import React, { Component } from "react";

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.state = { title: "" };
  }
  onTitleChange(e) {
    console.log(this.setState);
    e.persist();
    this.setState((prevState) => ({ title: e.target.value }));
  }

  render() {
    return (
      <div>
        <h3>Create a new song</h3>
        <form>
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

export default CreateSong;
