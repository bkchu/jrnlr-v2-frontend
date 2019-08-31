import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from '../design';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  ${css({
    padding: 3
  })}
`;

const Nav = () => (
  <Box width={'100%'} bg="grays.0">
    <StyledList>
      <li>
        <Link href="/">
          <a>Jrnlr</a>
        </Link>
      </li>
      {/* {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))} */}
    </StyledList>
  </Box>
);

export default Nav;
