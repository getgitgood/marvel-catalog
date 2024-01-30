import { Form as ReactForm } from 'react-router-dom';
import { styled } from 'styled-components';
import { FormProps } from '../types';

const StyledForm = styled(ReactForm)<FormProps>`
  display: flex;
  justify-content: center;
  gap: 0.5em;
`;

export default function Form(props: React.FormHTMLAttributes<HTMLFormElement>) {
  const { children, ...restProps } = props;
  return <StyledForm {...restProps}>{children}</StyledForm>;
}
