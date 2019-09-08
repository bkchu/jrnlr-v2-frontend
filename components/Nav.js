import { Box } from './Box';
import { Button } from './Button';
import Link from 'next/link';
import { Loader } from './Loader';
import { Logout } from './Mutation/Logout';
import { Me } from './Query/Me';
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';
import { Text } from '../design';
import css from '@styled-system/css';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  padding: 0;
  width: auto;

  ${css({
    fontSize: [1, 2],
    color: 'grays.2'
  })}

  li {
    ${css({
      marginRight: [2, 3]
    })}

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Nav = () => (
  <Me>
    {({ data, loading }) => {
      return (
        <Box width="100%" bg="grays.0">
          <Box
            p={[2, 3]}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StyledList>
              <li>
                <Link href="/">
                  <a>
                    <Text
                      fontWeight="6"
                      fontSize="4"
                      textTransform="uppercase"
                      letterSpacing="tracked"
                    >
                      Jrnlr
                    </Text>
                  </a>
                </Link>
              </li>
            </StyledList>
            <StyledList>
              {!!data && !!data.me && !loading && (
                <>
                  <li>
                    <Link href="/profile">
                      <a style={{ fontStyle: 'italic' }}>@{data.me.username}</a>
                    </Link>
                  </li>
                  <Logout>
                    {([logout]) => (
                      <li
                        onClick={async () => {
                          await logout();
                          Router.push('/login');
                        }}
                      >
                        <a>Log Out</a>
                      </li>
                    )}
                  </Logout>
                  <li>
                    <Link href="/publish">
                      <Button p="2" width="auto">
                        <a>New Post</a>
                      </Button>
                    </Link>
                  </li>
                </>
              )}
              {!data.me && !loading && (
                <>
                  <li>
                    <Link href="/register">
                      <a>Register</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login">
                      <Button p="2" width="auto">
                        <a>Login</a>
                      </Button>
                    </Link>
                  </li>
                </>
              )}
              {loading && <Loader />}
            </StyledList>
          </Box>
        </Box>
      );
    }}
  </Me>
);

export default Nav;
