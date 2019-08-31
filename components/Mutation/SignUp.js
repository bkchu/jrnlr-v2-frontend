import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useState } from 'react';
import { Box, Button, Form, Input } from '../../components';
import { sentenceCase } from '../../lib/utils/sentenceCase';
import ErrorMessage from '../ErrorMessage';
import { ME_QUERY } from '../Query/Me';
import { Router } from 'next/router';

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $fullname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    signup(
      name: $fullname
      username: $username
      email: $email
      password: $password
    ) {
      id
      name
      username
    }
  }
`;

export const SignUp = () => {
  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }]
  });
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  });

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const clearFields = () => {
    setInputs({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await signup({
      variables: {
        fullname: sentenceCase(`${inputs.firstname} ${inputs.lastname}`),
        email: inputs.email,
        username: inputs.username,
        password: inputs.password
      }
    });
    clearFields();
    Router.push('/');
  };

  return (
    <Box width={['100%', null, 1 / 2]} mx="auto" textAlign="right">
      <ErrorMessage error={error}></ErrorMessage>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Input
          name="first name"
          placeholder="First Name"
          value={inputs.firstname}
          onChange={onChange}
          required
        />
        <Input
          name="last name"
          placeholder="Last Name"
          value={inputs.lastname}
          onChange={onChange}
          required
        />
        <Input
          name="email"
          placeholder="Email"
          value={inputs.email}
          onChange={onChange}
          type="email"
          required
        />
        <Input
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={onChange}
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
            Register{loading ? 'ing...' : ''}
          </Button>
        </Box>
      </Form>
    </Box>
  );
};
