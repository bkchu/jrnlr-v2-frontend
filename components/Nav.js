import { Box } from './Box';
import { Button } from './Button';
import Link from 'next/link';
import { Loader } from './Loader';
import { Logout } from './Mutation/Logout';
import { Me } from './Query/Me';
import NProgress from 'nprogress';
import React from 'react';
import Router from 'next/router';
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
    margin-right: 2rem;

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
            p="3"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StyledList>
              <li>
                <Link href="/">
                  <a>Jrnlr</a>
                </Link>
              </li>
            </StyledList>
            <StyledList>
              {!!data && !!data.me && !loading && (
                <>
                  <li>
                    <Link href="/profile">
                      <a>Profile</a>
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
                    <Button p="2" width="auto">
                      <Link href="/publish">
                        <a>New Post</a>
                      </Link>
                    </Button>
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
                    <Button p="2" width="auto">
                      <Link href="/login">
                        <a>Login</a>
                      </Link>
                    </Button>
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
