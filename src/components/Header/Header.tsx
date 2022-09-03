import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header(): JSX.Element {
  return (
    <header className="Header">
      <Logo />
      <div className="Header__login">
        <span className="Header__user-name">User Name</span>
        <Button buttonText="Register" link="/register" />
        <Button buttonText="Login" link="/login" />
        <Button buttonText="Logout" />
      </div>
    </header>
  );
}
