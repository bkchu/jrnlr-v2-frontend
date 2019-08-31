import React, { Component } from 'react';
import Meta from './Meta';
import { theme, Box } from '../design';
import Nav from './Nav';
import { GlobalStyle } from '../design/global';
import { ThemeProvider } from 'styled-components';

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Nav></Nav>
          <Box width={[11 / 12, 8 / 12]} margin="0 auto">
            {this.props.children}
          </Box>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
