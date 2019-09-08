import { Loader } from '../components/Loader';
import { Posts } from '../components/Posts';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ErrorMessage from '../components/ErrorMessage';
import { POST_FRAGMENT } from '../components/Fragment/Post';

const POSTS_QUERY = gql`
  query POSTS_QUERY {
    posts(orderBy: createdAt_DESC, isProfile: true) {
      ...POST_FRAGMENT
    }
  }
  ${POST_FRAGMENT}
`;

const ProfilePosts = () => {
  const { data, error, loading } = useQuery(POSTS_QUERY, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true
  });
  if (loading) return <Loader />;
  if (error) {
    return <ErrorMessage error={error}></ErrorMessage>;
  }

  return <Posts posts={data.posts} />;
};

export default ProfilePosts;
export { POSTS_QUERY };
