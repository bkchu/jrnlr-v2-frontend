import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import slug from 'slug';
import { Box, Button } from '../../components';
import ErrorMessage from '../../components/ErrorMessage';
import { Loader } from '../../components/Loader';
import { ME_QUERY } from '../../components/Query/Me';
import { POST_QUERY } from '../../components/Query/Post';
import { Image, Text } from '../../design';

function Post() {
  const router = useRouter();

  const { data } = useQuery(ME_QUERY);

  const {
    data: { post },
    error,
    loading
  } = useQuery(POST_QUERY, {
    variables: { id: router.query.id }
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error} />;

  const isMe = data && data.me && data.me.id === post.author.id;

  return (
    <Box key={post.id} maxWidth="75rem" mt={[2, 3]} mb="7" mx="auto">
      {post.imgurl && <Image src={post.imgurl} alt="" mb="1" />}
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
      <Text
        color="grays.1"
        fontSize={[2, 3]}
        letterSpacing="tracked"
        fontWeight="2"
        mb="3"
      >
        @{post.author.username} -{' '}
        <span style={{ fontStyle: 'italic' }}>
          {moment(post.createdAt).fromNow()}
        </span>
      </Text>
      {isMe && (
        <Box>
          <Link
            href={{
              pathname: `/post/${slug(post.title).toLowerCase()}/edit`,
              query: { id: post.id }
            }}
          >
            <Button small secondary>
              Edit
            </Button>
          </Link>
        </Box>
      )}
      <Text
        fontFamily="sans"
        color="grays.1"
        fontSize={[2, 3]}
        fontWeight="4"
        my={4}
      >
        {post.content}
      </Text>
    </Box>
  );
}

export default Post;
