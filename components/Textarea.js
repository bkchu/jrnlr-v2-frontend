import PropTypes from 'prop-types';
import { StyledTextarea } from '../design';
import { sentenceCase } from '../lib/utils/sentenceCase';

export const Textarea = ({ name, type, ...props }) => {
  return (
    <label htmlFor={name}>
      {sentenceCase(name)}
      <StyledTextarea name={name} type={type} {...props}></StyledTextarea>
    </label>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

Textarea.defaultProps = {
  name: '',
  type: 'text'
};
