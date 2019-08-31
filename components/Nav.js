import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from './Box';
import { Me } from './Query/Me';
import { Logout } from './Mutation/Logout';
import { Button } from './Button';
import Router from 'next/router';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
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
                <li>Welcome, {data.me.name.split(' ')[0]}!</li>
                <Logout>
                  {([logout]) => (
                    <Button
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
              </>
            );
          }}
        </Me>
      </StyledList>
    </Box>
  </Box>
);

export default Nav;
