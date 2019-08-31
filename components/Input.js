import { StyledInput } from '../design';
import PropTypes from 'prop-types';
import { sentenceCase } from '../lib/utils/sentenceCase';

export const Input = ({ name, type, ...props }) => {
  return (
    <label htmlFor={name}>
      {sentenceCase(name)}
      <StyledInput name={name} type={type} {...props}></StyledInput>
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Input.defaultProps = {
  name: '',
  type: 'text'
};
