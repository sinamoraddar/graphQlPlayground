import gql from "graphql-tag";
export default gql`
  mutation LikeLyricById($id: ID) {
    likeLyric(id: $id) {
      likes
      id
    }
  }
`;
