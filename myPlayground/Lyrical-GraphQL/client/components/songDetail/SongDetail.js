import React from "react";
import { graphql } from "react-apollo";
import getSongDetail from "../../queries/getSongDetail";
import BackButton from "../backButton/BackButton";
import LyricCreate from "../lyricCreate/LyricCreate";

const SongDetail = ({ data }) => {
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
            {song.lyrics.length > 0 &&
              song.lyrics.map(({ content }, index) => (
                <p key={index}>{content}</p>
              ))}
            <LyricCreate songId={song.id} />
          </div>
        )}
      </h3>
    </div>
  );
};

export default graphql(getSongDetail, {
  options: (props) => ({ variables: { id: props.params.id } }),
})(SongDetail);
