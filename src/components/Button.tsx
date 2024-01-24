import { styled } from 'styled-components';
import { ButtonProps } from '../types';

const StyledButton = styled.button`
  padding: 0.5em;
  border-radius: 0.25em;
`;

export default function Button({
  buttonText,
  buttonType = 'submit'
}: ButtonProps) {
  return <StyledButton type={buttonType}>{buttonText}</StyledButton>;
}
