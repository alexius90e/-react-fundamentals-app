import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

function handleButtonClick(): void {
  alert('Header button click');
}

export default function Header(): JSX.Element {
  return (
    <header className="Header">
      <Logo />
      <div className="Header__login">
        <span className="Header__user-name">User Name</span>
        <Button buttonText="Logout" onClick={handleButtonClick} />
      </div>
    </header>
  );
}
