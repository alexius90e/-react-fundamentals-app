import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import './Registration.scss';

function Registration(): JSX.Element {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="registration">
      <h2 className="registration__heading">Registration</h2>
      <form className="registration__form" onSubmit={handleSubmit}>
        <Input label="Name" placeholder="Enter name" />
        <Input label="Email" placeholder="Enter email" />
        <Input label="Password" placeholder="Enter password" />
        <Button buttonText="Registration" />
      </form>
      <p className="registration__heading">
        If you have an account you can <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Registration;
