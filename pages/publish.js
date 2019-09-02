import { Box, Button, Form, GET_ALL_POSTS_QUERY, Input } from '../components';

import ErrorMessage from '../components/ErrorMessage';
import Router from 'next/router';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

export const PUBLISH_POST_MUTATION = gql`
  mutation PUBLISH_POST_MUTATION(
    $title: String!
    $subtitle: String
    $content: String!
    $imgurl: String
  ) {
    publishPost(
      title: $title
      subtitle: $subtitle
      content: $content
      imgurl: $imgurl
    ) {
      id
      title
      subtitle
      content
      imgurl
    }
  }
`;

export default function Publish() {
  const [publishPost, { loading, error, data }] = useMutation(PUBLISH_POST_MUTATION, {
    refetchQueries: [{ query: GET_ALL_POSTS_QUERY }]
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
    await publishPost({
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
        />
        <Input
          name="content"
          placeholder="Write your feels..."
          value={inputs.content}
          onChange={onChange}
          required
        />
        <Box display="flex" justifyContent="flex-end" pt="4">
          <Button width={['100%', null, 1 / 2]}>
            Publish{loading ? 'ing...' : ''} Post
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
