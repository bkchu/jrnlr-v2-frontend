import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import ErrorMessage from '../ErrorMessage';
import { POST_FRAGMENT } from '../Fragment/Post';
import { Loader } from '../Loader';
import { Posts } from '../Posts';

export const GET_ALL_POSTS_QUERY = gql`
  query GET_ALL_POSTS_QUERY {
    posts(orderBy: createdAt_DESC) {
      ...POST_FRAGMENT
    }
  }
  ${POST_FRAGMENT}
`;

export const AllPosts = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_QUERY);
  if (loading) return <Loader />;
  if (error) return <ErrorMessage error={error}></ErrorMessage>;

  return <Posts posts={data.posts} />;
};
