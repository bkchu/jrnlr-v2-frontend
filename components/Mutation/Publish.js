import gql from 'graphql-tag';

export const PUBLISH_POST_MUTATION = gql`
  mutation PUBLISH_POST_MUTATION(
    $title: String!
    $subtitle: String
    $content: String!
    $imgurl: String
  ) {
    publishPost(
      title: $title
      subtitle: $subtitle
      content: $content
      imgurl: $imgurl
    ) {
      id
      title
      subtitle
      content
      imgurl
    }
  }
`;
