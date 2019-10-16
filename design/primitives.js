import { css } from '@styled-system/css';
import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  typography
} from 'styled-system';

export const StyledBox = styled.div(
  {
    minWidth: 0
  },
  space,
  color,
  layout,
  flexbox,
  border,
  position
);

export const Text = styled.p`
  text-transform: ${props => props.textTransform};
  margin: 0;
  ${css({
    lineHeight: 'copy',
    fontFamily: 'sans',
    color: 'grays.1'
  })}
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

export const StyledTextarea = styled.textarea`
  ${css({
    padding: 3,
    width: ['100%'],
    border: 1,
    borderColor: 'grays.1',
    fontFamily: 'code',
    fontSize: [1, 2]
  })}

  resize: none;
  outline: 0;
  border-radius: 3px;

  ${color}
  ${typography}
  ${layout}
  ${space}
`;

export const StyledForm = styled.form`
  label {
    ${css({
      fontSize: [1, 2],
      fontWeight: 6,
      color: 'grays.1'
    })}
  }

  input,
  textarea {
    margin-bottom: 2rem;

    ${css({
      color: 'grays.1',
      backgroundColor: 'white'
    })}
  }

  fieldset[disabled] {
    label {
      ${css({
        color: 'blacks.7'
      })}
    }

    input,
    textarea {
      ${css({
        borderColor: 'blacks.5',
        color: 'blacks.7'
      })}
    }
  }

  ${space}
  ${color}
`;

export const StyledButton = styled.button`
  text-transform: uppercase;
  min-width: 10rem;
  ${css({
    padding: 3,
    fontSize: [1, 2],
    border: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    letterSpacing: 'tracked',
    fontWeight: '5',
    boxShadow: `0 4px 14px 0 rgba(46, 229, 157, 0.4)`,
    color: 'grays.0'
  })}

  /* secondary styles */
  ${props =>
    props.secondary &&
    css({
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: 'green',
      boxShadow: 'none'
    })}

  /* secondary styles */
  ${props =>
    props.error &&
    css({
      backgroundColor: 'red',
      borderColor: 'red',
      color: 'grays.0',
      boxShadow: '0 4px 14px 0 rgba(229, 46, 46, 0.4)'
    })}

  /* small styles */
  ${props =>
    props.small &&
    css({
      padding: 1
    })}


  &:active, &:hover {
    ${css({
      backgroundColor: 'lightgreen',
      borderColor: 'lightgreen',
      boxShadow: `0 4px 14px rgba(46, 229, 157, 0.2)`,
      color: 'grays.0'
    })}

    ${props =>
      props.secondary &&
      css({
        backgroundColor: 'green',
        borderColor: 'green',
        color: 'grays.0'
      })}
    
    ${props =>
      props.error &&
      css({
        backgroundColor: 'lightred',
        borderColor: 'lightred',
        color: 'grays.0',
        boxShadow: '0 4px 14px 0 rgba(229, 46, 46, 0.2)'
      })}
  }

  outline: 0;
  border-radius: 3px;
  transition: all 200ms;
  cursor: pointer;

  ${typography}
  ${space}
  ${layout}
  ${color}
  ${position}
`;
