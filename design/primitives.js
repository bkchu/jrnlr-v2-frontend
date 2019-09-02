import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography
} from 'styled-system';

import { css } from '@styled-system/css';
import styled from 'styled-components';

export const StyledBox = styled.div(
  {
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox,
  border
);

export const Text = styled.p`
  margin: 0;
  ${css({ lineHeight: 'copy', fontFamily: 'sans' })}
  ${color}
  ${typography}
  ${space}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${space}
  ${layout}
`;

export const StyledInput = styled.input`
  ${css({
    padding: 3,
    width: ['100%'],
    border: 1,
    borderColor: 'grays.1',
    fontFamily: 'code',
    fontSize: [1, 2]
  })}

  outline: 0;
  border-radius: 3px;

  ${typography}
  ${space}
`;

export const StyledForm = styled.form`
  label {
    ${css({
      fontSize: [1, 2],
      fontWeight: 6
    })}
  }

  input {
    margin-bottom: 2rem;
  }

  fieldset[disabled] {
    label {
      ${css({
        color: 'blacks.7'
      })}
    }

    input {
      ${css({
        borderColor: 'blacks.5',
        color: 'blacks.7'
      })}
    }
  }

  ${space}
`;

export const StyledButton = styled.button`
  ${css({
    padding: 3,
    width: ['100%'],
    fontSize: [1, 2],
    border: 1,
    // borderColor: 'grays.1',
    // backgroundColor: 'white'
    borderColor: 'green',
    backgroundColor: 'green',
    letterSpacing: 'tracked',
    fontWeight: '5',
    boxShadow: `0 4px 14px 0 rgba(46, 229, 157, 0.4)`
  })}

text-transform: uppercase;

&:focus, &:hover {
  ${css({
    backgroundColor: 'lightgreen',
    borderColor: 'lightgreen',
    boxShadow: `0 6px 20px rgba(46, 229, 157, 0.2)`,
    color: 'grays.1'
  })}
  }

  &[secondary] {

  }

  outline: 0;
  border-radius: 3px;
  transition: all 200ms;
  cursor: pointer;
  
  

  ${typography}
  ${space}
  ${layout}
`;
