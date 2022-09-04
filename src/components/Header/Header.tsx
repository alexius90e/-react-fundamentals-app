import { Location, useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';
import './Header.scss';

export default function Header(): JSX.Element {
  const location: Location = useLocation();

  const noUserInfoRoutes: string[] = ['/login', '/register'];

  return (
    <header className="header">
      <Logo />
      {noUserInfoRoutes.includes(location.pathname) ? null : (
        <div className="header__user-info">
          <span className="header__user-name">User Name</span>
          <Button buttonText="Logout" link="/login" />
        </div>
      )}
    </header>
  );
}
