import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ME_QUERY = gql`
  query {
    me {
      id
      name
      username
      theme
    }
  }
`;

export const Me = props => {
  const { loading, error, data } = useQuery(ME_QUERY, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true
  });
  return props.children({ loading, error, data });
};

export { ME_QUERY };
