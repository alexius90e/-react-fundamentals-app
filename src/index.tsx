import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';

import App from './App';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';

import { Author } from './models/author.interface';
import { Course } from './models/course.interface';
import { mockedAuthorsList, mockedCoursesList } from './constants';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const courses: Course[] = mockedCoursesList;
const authors: Author[] = mockedAuthorsList;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Navigate to="courses" />} />

          <Route path="courses" element={<Outlet />}>
            <Route path="" element={<Courses courses={courses} authors={authors} />} />

            <Route path="add" element={<CreateCourse authors={authors} />} />

            <Route path=":courseId" element={<CourseInfo />} />
          </Route>

          <Route path="login" />

          <Route path="register" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
