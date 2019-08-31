import React, { Component } from 'react';
import Meta from './Meta';
import { theme } from '../design';
import Nav from './Nav';
import { GlobalStyle } from '../design/global';
import { ThemeProvider } from 'styled-components';
import { Box } from './Box';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Nav />
          <Box width={[11 / 12, 8 / 12]} margin="0 auto">
            {this.props.children}
          </Box>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
