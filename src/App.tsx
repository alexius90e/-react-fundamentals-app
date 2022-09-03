import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

import './App.scss';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
