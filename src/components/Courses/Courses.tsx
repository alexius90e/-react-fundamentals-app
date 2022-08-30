import { useState } from 'react';
import Button from '../../common/Button/Button';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.scss';

function Courses(): JSX.Element {
  const courses: Course[] = mockedCoursesList;
  const authors: Author[] = mockedAuthorsList;

  const [addCourse, setAddCourse] = useState(false);

  function handleAddNewCourseClick(): void {
    setAddCourse(!addCourse);
  }

  const courseCards: JSX.Element = (
    <div className="Courses__cards">
      {courses.map((course) => (
        <CourseCard course={course} authorsList={authors} key={course.id} />
      ))}
    </div>
  );

  const createCourse: JSX.Element = <div>createCourse</div>;

  return (
    <main className="Courses">
      <div className="Courses__filter">
        <SearchBar />
        <Button buttonText="Add New Course" onClick={handleAddNewCourseClick} />
      </div>
      {addCourse ? createCourse : courseCards}
    </main>
  );
}

export default Courses;
