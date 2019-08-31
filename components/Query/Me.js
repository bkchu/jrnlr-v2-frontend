import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ME_QUERY = gql`
  query {
    me {
      id
      name
      username
    }
  }
`;

export const Me = props => {
  const { loading, error, data } = useQuery(ME_QUERY);
  return props.children({ loading, error, data });
};

export { ME_QUERY };
