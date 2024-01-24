import { LabelProps } from '../types';

export default function Label({ htmlFor, labelText = '' }: LabelProps) {
  return <label htmlFor={htmlFor}>{labelText}</label>;
}
