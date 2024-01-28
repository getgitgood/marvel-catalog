import { Form } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormProps } from '../types';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

export default function FormComponent({
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
