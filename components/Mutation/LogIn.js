import { Box, Button, Form, Input } from '../../components';

import ErrorMessage from '../ErrorMessage';
import { ME_QUERY } from '../Query/Me';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
      username
    }
  }
`;

const LogIn = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }]
  });
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name.replace(' ', '')]: e.target.value
    });
  };

  const clearFields = () => {
    setInputs({
      email: '',
      password: ''
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await login({ variables: inputs });
    clearFields();
    Router.push('/');
  };

  return (
    <Box width={['100%', null, 1 / 2]} mx="auto" textAlign="right">
      <ErrorMessage error={error}></ErrorMessage>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={onChange}
          type="email"
          required
        />
        <Input
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={onChange}
          type="password"
          required
        />
        <Box display="flex" justifyContent="flex-end" pt="4">
          <Button width={['100%', null, 1 / 2]}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

export { LogIn, LOGIN_MUTATION };
