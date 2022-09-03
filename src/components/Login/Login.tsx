import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Login.scss';

function Login(): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <h2 className="login__heading">Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <Input label="Email" placeholder="Enter email" />
        <Input label="Password" placeholder="Enter password" />
        <Button buttonText="Login" />
      </form>
      <p className="login__heading">
        If you not have an account you can <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
