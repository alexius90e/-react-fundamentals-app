import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { baseApiUrl, emailRegExp, passwordRegExp } from '../../constants';
import { ILoginResponseData } from '../../models/auth/login-response-data.interface';
import { IUserData } from '../../models/auth/user-data.interface';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Login.scss';

interface ILoginProps {
  addToken: (token: string) => void;
}

function Login(props: ILoginProps): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AxiosError | null>(null);

  const login = async (
    userData: IUserData
  ): Promise<AxiosResponse<ILoginResponseData, unknown>> => {
    return await axios.post(`${baseApiUrl}/login`, userData);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    try {
      const userData: IUserData = { email, password };
      const response: AxiosResponse<ILoginResponseData, unknown> = await login(userData);
      const token = response.data.result;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      props.addToken(token);
      navigate('/courses');
    } catch (error: unknown) {
      setError(error as AxiosError);
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <h2 className="login__heading">Login</h2>
      <form
        className="login__form"
        onSubmit={handleSubmit as (event: FormEvent<HTMLFormElement>) => void}
      >
        <Input
          label="Email"
          pattern={emailRegExp.source}
          placeholder="Enter email"
          required
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          pattern={passwordRegExp.source}
          placeholder="Enter password"
          required
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button buttonText="Login" />
      </form>
      {error === null ? null : <p className="login__error">{error.message}</p>}
      <p className="login__heading">
        If you not have an account you can <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
