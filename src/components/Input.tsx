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

export default function Input({
  inputId,
  placeholder,
  inputType = 'text',
  labelText = '',
  setComicsTitle
}: InputProps) {
  return (
    <StyledLabel htmlFor={inputId}>
      {labelText}
      <StyledInput
        onChange={
          setComicsTitle ? (e) => setComicsTitle(e.target.value) : undefined
        }
        id={inputId}
        placeholder={placeholder}
        type={inputType}
      />
    </StyledLabel>
  );
}
