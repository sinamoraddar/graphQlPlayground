import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data: { songs: songList, loading } }) => {
  const renderSongs = () => {
    return songList.map(({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
      </li>
    ));
  };
  return (
    <div>
      {loading ? (
        "Loading..."
      ) : songList !== null && songList.length > 0 ? (
        <div>
          Song List
          <ul className="collection">{renderSongs()}</ul>
        </div>
      ) : (
        "nothing available to show"
      )}
    </div>
  );
};

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
