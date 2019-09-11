import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import Link from 'next/link';
import slug from 'slug';
import { Image, Text } from '../design';
import { snippet } from '../lib/utils/sentenceSnippet';
import { Box } from './Box';
import { Button } from './Button';
import ErrorMessage from './ErrorMessage';
import { Loader } from './Loader';
import { ME_QUERY } from './Query/Me';
import Head from 'next/head';

const Posts = ({ posts }) => {
  const { data, error, loading } = useQuery(ME_QUERY);
  return posts.length ? (
    posts.map(post => {
      if (loading) return <Loader />;
      if (error) return <ErrorMessage error={error} />;

      const isMe = data && data.me && data.me.id === post.author.id;

      return (
        <Box
          key={post.id}
          maxWidth="8"
          mt={[2, 3]}
          mb="5"
          display="flex"
          justifyContent="space-between"
          flexDirection={['column-reverse', null, 'row']}
          position="relative"
        >
          {isMe && (
            <Link
              href={{
                pathname: `/post/${slug(post.title).toLowerCase()}/edit`,
                query: { id: post.id }
              }}
            >
              <Button
                small
                width="auto"
                position="absolute"
                right="1rem"
                top="1rem"
              >
                Edit
              </Button>
            </Link>
          )}
          <Box mr={[0, null, 3]} flex={[null, null, 1]}>
            <LinkToPost post={post}>
              <Text fontSize={[5, 6]} fontWeight="6" lineHeight="title" mb="2">
                {post.title}
              </Text>
            </LinkToPost>
            <Text fontSize={[3, 4]} fontWeight="2" mb="2">
              {post.subtitle || snippet(post.content)}
            </Text>

            <Text fontSize={[2, 3]} fontWeight="2" mb="3">
              {post.author.name} -{' '}
              <span style={{ fontStyle: 'italic' }}>
                {moment(post.createdAt).fromNow()}
              </span>
            </Text>
          </Box>
          {post.imgurl && (
            <LinkToPost post={post}>
              <Box
                width={['100%', null, 6]}
                height={['100%', null, '6']}
                mb={[2, 0]}
              >
                <Image src={post.imgurl} alt="" />
              </Box>
            </LinkToPost>
          )}
        </Box>
      );
    })
  ) : (
    <p>This user has no posts.</p>
  );
};

const LinkToPost = ({ post, children }) => (
  <Link
    href={{
      pathname: `/post`,
      query: { id: post.id }
    }}
    as={`/post/${slug(post.title).toLowerCase()}`}
  >
    <a>{children}</a>
  </Link>
);

export { Posts };
