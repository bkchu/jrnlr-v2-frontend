import { Image, Text } from '../design';

import { Box } from './Box';
import Link from 'next/link';
import moment from 'moment';
import slug from 'slug';
import { snippet } from '../lib/utils/sentenceSnippet';

const Posts = ({ posts }) => {
  return posts.length ? (
    posts.map(post => (
      <Box
        key={post.id}
        maxWidth="8"
        mt={[2, 3]}
        mb="5"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column-reverse', null, 'row']}
      >
        <Box mr={[0, null, 3]} flex={[null, null, 1]}>
          <LinkToPost post={post}>
            <Text
              color="grays.1"
              fontSize={[5, 6]}
              fontWeight="6"
              lineHeight="title"
              mb="2"
            >
              {post.title}
            </Text>
          </LinkToPost>
          <Text color="grays.1" fontSize={[3, 4]} fontWeight="2" mb="2">
            {post.subtitle || snippet(post.content)}
          </Text>
          <Text fontSize={[2, 3]} fontWeight="2" mb="3">
            @{post.author.username} - {moment(post.createdAt).fromNow()}
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
    ))
  ) : (
    <p>This user has no posts.</p>
  );
};

const LinkToPost = ({ post, children, ...props }) => (
  <Link
    href={{
      pathname: `/post`,
      query: { id: post.id }
    }}
    as={`/post/${slug(post.title).toLowerCase()}`}
    {...props}
  >
    <a>{children}</a>
  </Link>
);

export { Posts };
