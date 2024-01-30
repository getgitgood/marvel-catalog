import { styled } from 'styled-components';
import { InputProps } from '../types';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledInput = styled.input`
  padding: 0.2em 0.4em;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default function Input(props: InputProps) {
  const { labelText, id, ...restProps } = props;
  return (
    <StyledLabel htmlFor={id}>
      {labelText}
      <StyledInput id={id} {...restProps} />
    </StyledLabel>
  );
}
