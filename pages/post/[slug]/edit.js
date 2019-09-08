import { useMutation, useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import slug from 'slug';
import {
  Box,
  Button,
  Form,
  GET_ALL_POSTS_QUERY,
  Input,
  Textarea
} from '../../../components';
import ErrorMessage from '../../../components/ErrorMessage';
import { EDIT_POST_MUTATION } from '../../../components/Mutation/EditPost';
import { POST_QUERY } from '../../../components/Query/Post';

export default function Edit() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    title: '',
    subtitle: '',
    imgurl: '',
    content: ''
  });

  const { data: dataPost, error: errorPost, loading: loadingPost } = useQuery(
    POST_QUERY,
    {
      variables: {
        id: router.query.id
      }
    }
  );

  useEffect(() => {
    if (dataPost && dataPost.post) {
      setInputs({
        title: dataPost.post.title || '',
        subtitle: dataPost.post.subtitle || '',
        imgurl: dataPost.post.imgurl || '',
        content: dataPost.post.content || ''
      });
    }
  }, []);

  const [
    editPost,
    { loading: loadingEditPost, error: errorEditPost, dataEditPost }
  ] = useMutation(EDIT_POST_MUTATION, {
    refetchQueries: [{ query: GET_ALL_POSTS_QUERY }]
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
    const { data } = await editPost({
      variables: {
        ...inputs,
        id: router.query.id
      }
    });
    router.push({
      pathname: '/post',
      query: {
        id: data.updatePost.id
      }
    });
    clearFields();
  };

  return (
    <Box width={['100%', null, 8 / 12]} mx="auto" textAlign="right" my="3">
      <ErrorMessage error={errorPost || errorEditPost}></ErrorMessage>
      <Form disabled={loadingPost || loadingEditPost} onSubmit={onSubmit}>
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
            {loadingEditPost ? 'Publishing Edits...' : 'Publish Edits'}
          </Button>
        </Box>
      </Form>
    </Box>
  );
}
