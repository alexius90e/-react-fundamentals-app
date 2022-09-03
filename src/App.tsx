import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Author } from './models/author.interface';
import { Course } from './models/course.interface';
import { mockedAuthorsList, mockedCoursesList } from './constants';

import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Header from './components/Header/Header';

import './App.scss';

export default function App(): JSX.Element {
  const [courses, setCourses] = useState(mockedCoursesList as Course[]);
  const [authors, setAuthors] = useState(mockedAuthorsList as Author[]);

  const createCourse = (newCourse: Course): void => setCourses([...courses, newCourse]);
  const createAuthor = (newAuthor: Author): Author => {
    setAuthors([...authors, newAuthor]);
    return newAuthor;
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="courses" />} />

        <Route path="/courses" element={<Courses {...{ courses, authors }} />} />

        <Route
          path="/courses/add"
          element={<CreateCourse {...{ authors, createCourse, createAuthor }} />}
        />

        <Route path="/courses:courseId" element={<CourseInfo />} />

        <Route path="/login" />

        <Route path="/register" />
      </Routes>
    </BrowserRouter>
  );
}
