import { styled } from 'styled-components';
import { FormProps } from '../types';
import Label from './Label';
import Input from './Input';
import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

export default function Form({
  buttonText,
  labelText,
  buttonType,
  inputId,
  inputType,
  htmlFor,
  placeholder
}: FormProps) {
  return (
    <StyledForm>
      <Label {...{ htmlFor, labelText }} />
      <Input {...{ inputId, inputType, placeholder }} />
      <Button {...{ buttonText, buttonType }} />
    </StyledForm>
  );
}
