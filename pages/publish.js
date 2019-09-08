import {
  Box,
  Button,
  Form,
  GET_ALL_POSTS_QUERY,
  Input,
  Textarea
} from '../components';

import ErrorMessage from '../components/ErrorMessage';
import { PUBLISH_POST_MUTATION } from '../components/Mutation/Publish';
import Router from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';

export default function Publish() {
  const [publishPost, { loading, error, data }] = useMutation(
    PUBLISH_POST_MUTATION,
    {
      refetchQueries: [{ query: GET_ALL_POSTS_QUERY }]
    }
  );

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
    <Box width={['100%', null, 8 / 12]} mx="auto" textAlign="right" my="3">
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
          value={inputs.subtitle}
          onChange={onChange}
        />
        <Input
          name="imgurl"
          placeholder="Image URL"
          value={inputs.imgurl}
          onChange={onChange}
        />
        <Textarea
          name="content"
          placeholder="Write your feels..."
          value={inputs.content}
          onChange={onChange}
          height="8"
          required
        />
        <Box display="flex" justifyContent="flex-end" pt="4">
          <Button width={['100%', null, 1 / 2]}>
            {loading ? 'Publishing Post...' : 'Publish Post'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
