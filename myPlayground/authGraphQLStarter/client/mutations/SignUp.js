import gql from "graphql-tag";

export default gql`
  mutation SingUp($email: String, $password: String) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;
