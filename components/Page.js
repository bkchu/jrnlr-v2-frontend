import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ThemeProvider } from 'styled-components';
import { theme } from '../design';
import { GlobalStyle } from '../design/global';
import { Box } from './Box';
import ErrorMessage from './ErrorMessage';
import Meta from './Meta';
import Nav from './Nav';
import { ME_QUERY } from './Query/Me';
import styled from 'styled-components';
import { css } from '@styled-system/css';
import { Loader } from './Loader';

const TOGGLE_DARK_MODE_MUTATION = gql`
  mutation TOGGLE_DARK_MODE_MUTATION {
    toggleDarkMode {
      theme
    }
  }
`;

const Page = props => {
  const { data, loading, error } = useQuery(ME_QUERY, {
    fetchPolicy: 'cache-only'
  });
  console.log(loading);
  const [toggleDarkMode] = useMutation(TOGGLE_DARK_MODE_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }]
  });

  const toggleTheme = () => {
    toggleDarkMode();
  };

  return (
    <ThemeProvider
      theme={
        theme[data && data.me && data.me.theme && !loading ? 'dark' : 'light']
      }
    >
      <>
        <GlobalStyle />
        <Meta />
        {loading && (
          <FullScreenLoader>
            <Loader />
          </FullScreenLoader>
        )}
        <Nav toggleTheme={toggleTheme} />
        <Box width={['auto', 8 / 12]} margin={[2, '0 auto']}>
          <ErrorMessage error={error}></ErrorMessage>
          {props.children}
        </Box>
      </>
    </ThemeProvider>
  );
};

export default Page;

export const FullScreenLoader = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${css({
    background: 'black'
  })}
`;
