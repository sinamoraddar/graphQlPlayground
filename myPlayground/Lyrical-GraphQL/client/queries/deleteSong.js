import gql from "graphql-tag";
export default gql`
  mutation DeleteSong($songId: ID) {
    deleteSong(id: $songId) {
      title
      id
    }
  }
`;
