import gql from 'graphql-tag';

export const EDIT_POST_MUTATION = gql`
  mutation EDIT_POST_MUTATION(
    $id: ID!
    $title: String
    $subtitle: String
    $content: String
    $imgurl: String
  ) {
    updatePost(
      id: $id
      title: $title
      subtitle: $subtitle
      content: $content
      imgurl: $imgurl
    ) {
      id
      title
    }
  }
`;
