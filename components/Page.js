import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../design';
import { GlobalStyle } from '../design/global';
import { Box } from './Box';
import Meta from './Meta';
import Nav from './Nav';

const Page = props => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true');
  }, [darkMode]);

  const toggleTheme = () => {
    localStorage.removeItem('darkMode');
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(() => !darkMode);
  };

  return (
    <ThemeProvider theme={theme[darkMode ? 'dark' : 'light']}>
      <>
        <GlobalStyle />
        <Meta />
        <Nav toggleTheme={toggleTheme} />
        <Box width={['auto', 8 / 12]} margin={[2, '0 auto']}>
          {props.children}
        </Box>
      </>
    </ThemeProvider>
  );
};

export default Page;
