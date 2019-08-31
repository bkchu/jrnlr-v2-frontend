import PropTypes from 'prop-types';
import { StyledForm } from '../design';

export const Form = ({ action, children, disabled, ...props }) => {
  return (
    <StyledForm action={action} {...props}>
      <fieldset disabled={disabled} aria-busy={disabled}>{children}</fieldset>
    </StyledForm>
  );
};

Form.propTypes = {
  action: PropTypes.string,
  disabled: PropTypes.bool
};

Form.defaultProps = {
  action: 'post',
  disabled: false
};
