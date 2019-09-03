import gql from 'graphql-tag';

export const POST_QUERY = gql`
query POST_QUERY($id: String!) {
  post(id: $id) {
    id
    title
    subtitle
    author {
      name
      username
    }
    imgurl
    content
    createdAt
  }
}
`;