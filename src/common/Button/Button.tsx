import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  buttonText: string;
  link?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps): JSX.Element {
  const buttonElement: JSX.Element = (
    <button className="Button" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );

  if (props.link !== undefined) return <Link to={props.link}>{buttonElement}</Link>;
  return buttonElement;
}
