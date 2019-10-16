import gql from 'graphql-tag';

export const SET_DARK_THEME = gql`
  {
    darktheme @client
  }
`;
