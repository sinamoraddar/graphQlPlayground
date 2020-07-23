import React from "react";
import { graphql } from "react-apollo";
import getSongDetail from "../../queries/getSongDetail";

const SongDetail = ({ data }) => {
  const { song, loading } = data;
  return (
    <div>
      <h3>{loading ? "Loading..." : song.title || "404 not found"}</h3>
    </div>
  );
};

export default graphql(getSongDetail, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
