import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data: { songs: songList } }) => {
  return (
    <div>
      Song List
      {songList && songList !== null && songList.length > 0 && (
        <ul>
          {songList.map(({ title, id }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
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
