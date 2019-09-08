import gql from 'graphql-tag';
import { POST_FRAGMENT } from '../Fragment/Post';

export const POST_QUERY = gql`
  query POST_QUERY($id: String!) {
    post(id: $id) {
      ...POST_FRAGMENT
    }
  }
  ${POST_FRAGMENT}
`;
