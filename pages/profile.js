import { Loader } from '../components/Loader';
import { Posts } from '../components/Posts';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const POSTS_QUERY = gql`
  query POSTS_QUERY {
    posts {
      id
      title
      subtitle
      author {
        name
        username
      }
      imgurl
      content
    }
  }
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
