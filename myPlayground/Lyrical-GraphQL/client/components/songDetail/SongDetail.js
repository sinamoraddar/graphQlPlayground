import React from "react";
import { graphql } from "react-apollo";
import getSongDetail from "../../queries/getSongDetail";
import BackButton from "../backButton/BackButton";
import LyricCreate from "../lyricCreate/LyricCreate";
import LyricList from "../lyricList/LyricList";

const SongDetail = ({ data, params: { id } }) => {
  const { song, loading } = data;
  return (
    <div>
      <BackButton />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <h3>{song.title}</h3>
          {song.lyrics.length > 0 && <LyricList lyrics={song.lyrics} />}
          <LyricCreate songId={id} />
        </div>
      )}
    </div>
  );
};

export default graphql(getSongDetail, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
