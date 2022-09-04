import { ChangeEvent } from 'react';
import './Input.scss';
interface InputProps {
  label?: string;
  type?: 'text' | 'number' | 'search' | 'password' | 'email';
  value?: string;
  pattern?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
}

function Input(props: InputProps): JSX.Element {
  return (
    <div className="Input">
      <label className="Input__label">
        {props.label}
        <input
          className="Input__input"
          type={props.type ?? 'text'}
          value={props.value}
          pattern={props.pattern}
          required={props.required}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}

export default Input;
