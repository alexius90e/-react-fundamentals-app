import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';

import { Author } from './models/author.interface';
import { Course } from './models/course.interface';

import { mockedAuthorsList, mockedCoursesList } from './constants';

import './App.scss';
import { useState } from 'react';

export default function App(): JSX.Element {
  const [courses, setCourses] = useState(mockedCoursesList as Course[]);
  const [authors, setAuthors] = useState(mockedAuthorsList as Author[]);
  const [isEdited, setIsEdited] = useState(false);

  const addCourse = (course: Course | null): void => {
    setIsEdited(!isEdited);
    if (course === null || course.title === '' || course.description === '' || course.duration <= 0)
      return;
    setCourses([...courses, course]);
  };

  const addAuthor = (author: Author): void => {
    setAuthors([...authors, author]);
  };

  return (
    <>
      <Header />
      {isEdited ? (
        <CreateCourse authors={authors} createCourse={addCourse} createAuthor={addAuthor} />
      ) : (
        <Courses courses={courses} authors={authors} createCourse={addCourse} />
      )}
    </>
  );
}
