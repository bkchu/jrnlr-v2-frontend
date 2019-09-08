import gql from 'graphql-tag';

export const POST_FRAGMENT = gql`
  fragment POST_FRAGMENT on Post {
    id
    title
    subtitle
    author {
      id
      name
      username
    }
    imgurl
    content
    createdAt
  }
`;
