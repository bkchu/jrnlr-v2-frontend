import { Box, Button, Form, Input } from '../components';

import ErrorMessage from '../components/ErrorMessage';
import { ME_QUERY } from '../components/Query/Me';
import Router from 'next/router';
import gql from 'graphql-tag';
import { sentenceCase } from '../lib/utils/sentenceCase';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

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

export default function NewPost() {
  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }]
  });

  const [inputs, setInputs] = useState({
    title: '',
    subtitle: '',
    imgurl: '',
    content: ''
  });

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name.replace(' ', '')]: e.target.value
    });
  };

  const clearFields = () => {
    setInputs({
      title: '',
      subtitle: '',
      imgurl: '',
      content: ''
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await signup({
      variables: inputs
    });
    clearFields();
    Router.push('/');
  };

  return (
    <Box width={['100%', null, 1 / 2]} mx="auto" textAlign="right">
      <ErrorMessage error={error}></ErrorMessage>
      <Form disabled={loading} onSubmit={onSubmit}>
        <Input
          name="title"
          placeholder="Title"
          value={inputs.title}
          onChange={onChange}
          required
        />
        <Input
          name="subtitle"
          placeholder="Subtitle"
          value={inputs.lastname}
          onChange={onChange}
        />
        <Input
          name="imgurl"
          placeholder="Image URL"
          value={inputs.username}
          onChange={onChange}
          required
        />
        <Input
          name="content"
          placeholder="Write your feels..."
          value={inputs.content}
          onChange={onChange}
          type="email"
          required
        />
        <Box display="flex" justifyContent="flex-end" pt="4">
          <Button width={['100%', null, 1 / 2]}>
            Create{loading ? 'ing...' : ''} Post
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
