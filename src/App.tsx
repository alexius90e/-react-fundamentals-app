import './App.scss';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

export default function App(): JSX.Element {
  return (
    <>
      <Header />
      <CreateCourse />
      <Courses />
    </>
  );
}
