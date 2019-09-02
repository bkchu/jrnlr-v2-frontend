import ErrorMessage from '../ErrorMessage';
import { Posts } from '../Posts';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const GET_ALL_POSTS_QUERY = gql`
  query GET_ALL_POSTS_QUERY {
    allPosts {
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

export const AllPosts = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS_QUERY);
  if (loading) return <p>Loading ...</p>;
  if (error) {
    return <ErrorMessage error={error}></ErrorMessage>;
  }

  return <Posts posts={data.allPosts} />;
};
