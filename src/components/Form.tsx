import { Form as ReactForm } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormProps } from '../types';

const StyledForm = styled(ReactForm)`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

export default function Form({
  children,
  onSubmit,
  autocomplete = 'on'
}: FormProps) {
  return (
    <StyledForm onSubmit={onSubmit} autoComplete={autocomplete}>
      {children}
    </StyledForm>
  );
}
