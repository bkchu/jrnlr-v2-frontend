import { StyledInput } from '../design';
import PropTypes from 'prop-types';

export const Input = ({ name, type, ...props }) => {
  const sentenceCase = name =>
    name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

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
}
