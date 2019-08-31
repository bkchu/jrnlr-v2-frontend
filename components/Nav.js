import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from './Box';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;

  ${css({
    padding: 3
  })}

  li {
    margin-right: 2rem;
  }
`;

const Nav = () => (
  <Box width="100%" bg="grays.0">
    <StyledList>
      <li>
        <Link href="/">
          <a>Jrnlr</a>
        </Link>
      </li>
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
    </StyledList>
  </Box>
);

export default Nav;
