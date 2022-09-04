import { ChangeEvent, FormEvent, useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { baseApiUrl, emailRegExp, nameRegExp, passwordRegExp } from '../../constants';

import axios, { AxiosError } from 'axios';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Registration.scss';

function Registration(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<AxiosError | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const user = { name, email, password };

    try {
      await axios.post(`${baseApiUrl}/register`, user);
      navigate('/login');
    } catch (error: unknown) {
      setError(error as AxiosError);
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <div className="registration">
      <h2 className="registration__heading">Registration</h2>s
      <form
        className="registration__form"
        onSubmit={handleSubmit as (event: FormEvent<HTMLFormElement>) => void}
      >
        <Input
          label="Name"
          pattern={nameRegExp.source}
          placeholder="Enter name"
          required
          value={name}
          onChange={handleNameChange}
        />
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
        <Button buttonText="Registration" />
      </form>
      {error === null ? null : <p className="registration__error">{error.message}</p>}
      <p className="registration__heading">
        If you have an account you can <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Registration;
