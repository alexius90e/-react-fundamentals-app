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

  return props.link === undefined ? buttonElement : <Link to={props.link}>{buttonElement}</Link>;
}
