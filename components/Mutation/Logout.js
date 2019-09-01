import { ME_QUERY } from '../Query/Me';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const LOGOUT_MUTATION = gql`
  mutation LOGOUT_MUTATION {
    logout {
      message
    }
  }
`;

const Logout = props => {
  const [logout, payload] = useMutation(LOGOUT_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }]
  });

  return props.children([logout, payload]);
};

export { LOGOUT_MUTATION, Logout };
