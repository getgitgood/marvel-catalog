import { ButtonProps } from '../types';

export default function Button(props: ButtonProps) {
  const { buttonText, ...restProps } = props;
  return <button {...restProps}>{buttonText}</button>;
}
