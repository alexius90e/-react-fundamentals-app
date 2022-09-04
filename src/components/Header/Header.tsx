import { Location, useLocation } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { baseApiUrl } from '../../constants';

import Button from '../../common/Button/Button';
import Logo from './components/Logo/Logo';

import './Header.scss';
import { IUser } from '../../models/auth/user.interface';

interface IHeaderProps {
  removeToken: () => void;
}

export default function Header(props: IHeaderProps): JSX.Element {
  const location: Location = useLocation();

  const user = localStorage.getItem('user');

  const noUserInfoRoutes: string[] = ['/login', '/register'];

  const logout = async (): Promise<AxiosResponse<any, any>> => {
    const authorizationToken = localStorage.getItem('token');
    console.log(authorizationToken);
    return await axios.delete(`${baseApiUrl}/logout`, {
      headers: {
        Authorization: String(authorizationToken),
      },
    });
  };

  const handleClick = async (): Promise<void> => {
    try {
      await logout();
      props.removeToken();
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <header className="header">
      <Logo />
      {noUserInfoRoutes.includes(location.pathname) ? null : (
        <div className="header__user-info">
          <span className="header__user-name">
            {user === null ? 'Unknown User' : (JSON.parse(user) as IUser).name}
          </span>
          <Button buttonText="Logout" link="/login" onClick={handleClick as () => void} />
        </div>
      )}
    </header>
  );
}
