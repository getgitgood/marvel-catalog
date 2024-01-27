import { styled } from 'styled-components';
import { InputProps } from '../types';

const StyledInput = styled.input`
  padding: 0.2em 0.5em;
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
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <StyledInput
        onChange={
          setComicsTitle ? (e) => setComicsTitle(e.target.value) : undefined
        }
        id={inputId}
        placeholder={placeholder}
        type={inputType}
      />
    </>
  );
}
