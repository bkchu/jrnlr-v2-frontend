import gql from 'graphql-tag';

export const DARK_MODE_QUERY = gql`
  {
    darktheme @client
  }
`;
