import { Link } from 'react-router-dom';
import logoSrc from '../../../../assets/logo.svg';
import './Logo.scss';

export default function Logo(): JSX.Element {
  return (
    <div className="Logo">
      <Link to="/">
        <img className="Logo__image" src={logoSrc} alt="logo" />
      </Link>
    </div>
  );
}
