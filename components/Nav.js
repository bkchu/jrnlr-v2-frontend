import { Box } from './Box';
import { Button } from './Button';
import Link from 'next/link';
import { Logout } from './Mutation/Logout';
import { Me } from './Query/Me';
import React from 'react';
import Router from 'next/router';
import css from '@styled-system/css';
import styled from 'styled-components';

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
  }
`;

const Nav = () => (
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
        <Me>
          {({ data }) => {
            return !!data && !!data.me ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <Link href="/new-post">
                    <a>New Post</a>
                  </Link>
                </li>
                <Logout>
                  {([logout]) => (
                    <Button
                      p="2"
                      width="auto"
                      onClick={() => {
                        logout();
                        Router.push('/login');
                      }}
                    >
                      Logout
                    </Button>
                  )}
                </Logout>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                </li>
                <li>
                  <Link href="/new-post">
                    <a>New Post</a>
                  </Link>
                </li>
              </>
            );
          }}
        </Me>
      </StyledList>
    </Box>
  </Box>
);

export default Nav;
