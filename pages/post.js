import { Image, Text } from '../design';

import { Box } from '../components';
import ErrorMessage from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { POST_QUERY } from '../components/Query/Post';
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const {
    data: { post },
    error,
    loading
  } = useQuery(POST_QUERY, {
    variables: { id: router.query.id }
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;
  return (
    <Box key={post.id} maxWidth="75rem" mt="5" mb="7" mx="auto">
      <Image src={post.imgurl} alt="" mb="3" />
      <Text
        color="grays.1"
        fontSize={[5, 6]}
        fontWeight="6"
        lineHeight="title"
        mb="3"
      >
        {post.title}
      </Text>
      <Text color="grays.1" fontSize={[3, 4]} fontWeight="2" mb="2">
        {post.subtitle}
      </Text>
      <Text fontSize={[2, 3]} letterSpacing="tracked" fontWeight="2" mb="3">
        @{post.author.username} - {moment(post.createdAt).fromNow()}
      </Text>
      <Text
        fontFamily="sans"
        color="grays.1"
        fontSize={[1, 2]}
        fontWeight="4"
        my={4}
      >
        {post.content}
      </Text>
    </Box>
  );
}

export default Post;
