import { StyledInput } from '../design';
import PropTypes from 'prop-types';

export const Input = ({ name, ...props }) => {
  return (
    <label htmlFor={name}>
      {name}
      <StyledInput name={name} {...props}></StyledInput>
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired
};
