import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Author } from './models/author.interface';
import { Course } from './models/course.interface';
import { mockedAuthorsList, mockedCoursesList } from './constants';

import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

import './App.scss';

export default function App(): JSX.Element {
  const [courses, setCourses] = useState(mockedCoursesList as Course[]);
  const [authors, setAuthors] = useState(mockedAuthorsList as Author[]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const addToken = (token: string): void => setToken(token);

  const removeToken = (): void => setToken(null);

  const createCourse = (newCourse: Course): void => setCourses([...courses, newCourse]);

  const createAuthor = (newAuthor: Author): Author => {
    setAuthors([...authors, newAuthor]);
    return newAuthor;
  };

  return (
    <BrowserRouter>
      <Header removeToken={removeToken} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to={token === null ? '/login' : '/courses'} />} />

          <Route path="/courses" element={<Courses {...{ courses, authors }} />} />

          <Route
            path="/courses/add"
            element={<CreateCourse {...{ authors, createCourse, createAuthor }} />}
          />

          <Route path="/courses/:courseId" element={<CourseInfo />} />

          <Route path="/login" element={<Login addToken={addToken} />} />

          <Route path="/register" element={<Registration />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
