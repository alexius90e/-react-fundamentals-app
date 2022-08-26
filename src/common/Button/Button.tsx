import './Button.scss';

interface ButtonProps {
  buttonText: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <button className="button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}
