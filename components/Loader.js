import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { Box } from './Box';
import css from '@styled-system/css';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 5px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Dot = styled.div`
  ${css({
    backgroundColor: 'green'
  })}
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 3px;
  /* Animation */
  animation: ${BounceAnimation} 0.7s linear infinite;
  animation-delay: ${props => props.delay};
`;
class Loader extends Component {
  render() {
    return (
      <Box width='100%' height='auto' display='flex' justifyContent='center' alignItems='center'>
        <DotWrapper>
          <Dot delay="0s" />
          <Dot delay=".17s" />
          <Dot delay=".34s" />
        </DotWrapper>
      </Box>
    );
  }
}
export { Loader };
