import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../../queries/fetchSongs";
import deleteSongMutation from "../../queries/deleteSong";
import fetchSongsQuery from "../../queries/fetchSongs";

const SongList = ({ data: { songs: songList, loading }, mutate }) => {
  const onDelete = ({ title, id }) => {
    mutate({
      variables: { songId: id },
      refetchQueries: [{ query: fetchSongsQuery }],
    })
      .then(() => {
        // alert(`${title} was deleted ,id: ${id}`);
      })
      .catch((error) => {
        alert("something went wrong");
        console.log(error);
      });
  };
  const renderSongs = () => {
    return songList.map(({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
        <i
          className="material-icons"
          onClick={onDelete.bind(null, { title, id })}
          style={{ cursor: "pointer" }}
        >
          delete
        </i>
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
      <Link
        to="/songs/new"
        className="btn-floating btn-large
      red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

export default graphql(deleteSongMutation)(graphql(query)(SongList));
