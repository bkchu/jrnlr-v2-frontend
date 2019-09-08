import React, { Component } from 'react';

import { Box } from './Box';
import { GlobalStyle } from '../design/global';
import Meta from './Meta';
import Nav from './Nav';
import { ThemeProvider } from 'styled-components';
import { theme } from '../design';

class Page extends Component {
  state = {
    theme: theme.light
  }
  
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          <Meta />
          <Nav />
          <Box width={['auto', 8 / 12]} margin={[2, "0 auto"]}>
            {this.props.children}
          </Box>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
