import './App.scss';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <Courses />
    </>
  );
}
