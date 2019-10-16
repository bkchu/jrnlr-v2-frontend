import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import Head from 'next/head';
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
    <>
      <Head>
        <title>
          {post.title} | {post.author.name}
        </title>
      </Head>
      <Box key={post.id} maxWidth="75rem" mt={[2, 3]} mb="7" mx="auto">
        {post.imgurl && post.imgurl.regular && (
          <Image src={post.imgurl.regular} alt="" mb="1" />
        )}
        <Text fontSize={[5, 6]} fontWeight="6" lineHeight="title" mb="3">
          {post.title}
        </Text>
        <Text fontSize={[3, 4]} fontWeight="2" mb="2">
          {post.subtitle}
        </Text>
        <Text fontSize={[2, 3]} letterSpacing="tracked" fontWeight="2" mb="3">
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
              <Button small>Edit</Button>
            </Link>
          </Box>
        )}
        <Text fontFamily="sans" fontSize={[2, 3]} fontWeight="4" my={4}>
          {post.content}
        </Text>
      </Box>
    </>
  );
}

export default Post;
