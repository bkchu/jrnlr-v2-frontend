import { Image, Text } from '../design';

import { Box } from './Box';
import moment from 'moment';
import { snippet } from '../lib/utils/sentenceSnippet';

const Posts = ({ posts }) => {
  return posts.length ? (
    posts.map(post => (
      <Box
        key={post.id}
        maxWidth="8"
        mt="5"
        mb="5"
        display="flex"
        justifyContent="space-between"
        flexDirection={['column-reverse', null, 'row']}
      >
        <Box mr={[0, null, 3]} flex={[null, null, 1]}>
          <Text
            color="grays.1"
            fontSize={[5, 6]}
            fontWeight="6"
            lineHeight="title"
            mb="2"
          >
            {post.title}
          </Text>
          <Text color="grays.1" fontSize={[3, 4]} fontWeight="2" mb="2">
            {post.subtitle || snippet(post.content)}
          </Text>
          <Text fontSize={[2, 3]} fontWeight="2" mb="3">
            @{post.author.username} - {moment(post.createdAt).fromNow()}
          </Text>
        </Box>
        {post.imgurl && (
          <Box width={['100%', null, 6]} height={['100%', null, "6"]}>
            <Image src={post.imgurl} alt="" />
          </Box>
        )}
        {/* <Text
        fontFamily="sans"
        color="grays.1"
        fontSize={[1, 2]}
        fontWeight="4"
        my={4}
      >
        {post.content}
      </Text> */}
      </Box>
    ))
  ) : (
    <p>This user has no posts.</p>
  );
};
export { Posts };
