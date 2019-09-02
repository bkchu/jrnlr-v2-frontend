import { Image, Text } from '../design';

import { Box } from './Box';

const Posts = ({ posts }) =>
  posts.map(post => (
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
        @{post.author.username}
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
  ));

export { Posts };
