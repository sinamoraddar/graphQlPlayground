import React from "react";
import { graphql } from "react-apollo";
import getSongDetail from "../../queries/getSongDetail";
import BackButton from "../backButton/BackButton";
import LyricCreate from "../lyricCreate/LyricCreate";
import LyricList from "../lyricList/LyricList";

const SongDetail = ({ data, params: { id } }) => {
  const { song, loading } = data;
  console.log(song);
  return (
    <div>
      <BackButton />
      <h3>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            {song.title}
            {song.lyrics.length > 0 && <LyricList lyrics={song.lyrics} />}
            <LyricCreate songId={id} />
          </div>
        )}
      </h3>
    </div>
  );
};

export default graphql(getSongDetail, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
