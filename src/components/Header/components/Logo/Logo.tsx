import logoSrc from '../../../../assets/logo.svg';
import './Logo.scss';

export default function Logo(): JSX.Element {
  return (
    <div className="Logo">
      <img src={logoSrc} alt="logo" />
    </div>
  );
}
