import { ChangeEvent } from 'react';
import './Input.scss';
interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
  type?: 'text' | 'number' | 'search' | 'password' | 'color';
}

function Input(props: InputProps): JSX.Element {
  return (
    <label>
      {props.label}
      <input
        className="Input"
        type={props.type ?? 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
}

export default Input;
