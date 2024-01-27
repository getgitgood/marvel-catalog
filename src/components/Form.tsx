import { FormEvent } from 'react';
import { Form } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormComponentProps } from '../types';
import { Button, Input } from './index';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

export default function FormComponent({
  buttonText,
  buttonType,
  inputId,
  inputType,
  placeholder,
  setCurrentSearch
}: FormComponentProps) {
  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { elements } = e.currentTarget;
    const { value } = elements.namedItem('search') as HTMLInputElement;
    setCurrentSearch!(value);
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <Input {...{ inputId, inputType, placeholder }} />
      <Button {...{ buttonText, buttonType }} />
    </StyledForm>
  );
}
