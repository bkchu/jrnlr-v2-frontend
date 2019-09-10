import React, { useState } from 'react';

import { Box } from './Box';
import { GlobalStyle } from '../design/global';
import Meta from './Meta';
import Nav from './Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from '../design';
import { Button } from './Button';

const Page = props => {
  const [theTheme, setTheTheme] = useState('light');
  const toggle = () => setTheTheme(theTheme === 'light' ? 'dark' : 'light');
  return (
    <ThemeProvider theme={theme[theTheme]}>
      <>
        <GlobalStyle />
        <Meta />
        <Nav toggle={toggle}/>
        <Box width={['auto', 8 / 12]} margin={[2, '0 auto']}>
          {props.children}
        </Box>
      </>
    </ThemeProvider>
  );
};

export default Page;
