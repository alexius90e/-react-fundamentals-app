import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

import { Author } from './models/author.interface';
import { Course } from './models/course.interface';

import { mockedAuthorsList, mockedCoursesList } from './constants';

import './App.scss';

export default function App(): JSX.Element {
  const courses: Course[] = mockedCoursesList;
  const authors: Author[] = mockedAuthorsList;

  return (
    <>
      <Header />
      <Courses courses={courses} authors={authors} />
    </>
  );
}
