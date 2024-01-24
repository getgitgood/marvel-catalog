import { ReactNode } from 'react';

export type PrivateRouteProps = {
  children: ReactNode;
  redirectPath: string;
};

export type ButtonProps = {
  buttonText: string;
  buttonType?: 'button' | 'submit' | 'reset' | undefined;
};

export type InputProps = {
  inputId: string;
  // setState?: (value: string) => void;
  placeholder?: string;
  inputType?: string;
};

export type LabelProps = {
  htmlFor: string;
  labelText?: string;
};

export type FormProps = ButtonProps & InputProps & LabelProps;
