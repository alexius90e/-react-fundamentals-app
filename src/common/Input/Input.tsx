import './Input.scss';
interface InputProps {
  label?: string;
  placeholder?: string;
}

function Input(props: InputProps): JSX.Element {
  return (
    <label>
      {props.label}
      <input className="Input" type="text" placeholder={props.placeholder} />
    </label>
  );
}

export default Input;
