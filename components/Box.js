import { StyledBox } from '../design';

export const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
