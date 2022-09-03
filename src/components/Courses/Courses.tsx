import { useState } from 'react';
import Button from '../../common/Button/Button';
import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.scss';

interface CoursesProps {
  courses: Course[];
  authors: Author[];
}

function Courses(props: CoursesProps): JSX.Element {
  const [filteredCourses, setFilteredCourses] = useState(props.courses);

  function checkField(fieldValue: string, searchQuery: string): boolean {
    return fieldValue.toLowerCase().includes(searchQuery);
  }

  function filterCourses(searchQuery: string): void {
    setFilteredCourses(
      props.courses.filter((course: Course): boolean => {
        const { id, title } = course;
        return checkField(id, searchQuery) || checkField(title, searchQuery);
      })
    );
  }

  return (
    <main className="Courses">
      <div className="Courses__filter">
        <SearchBar onSearch={filterCourses} />
        <Button buttonText="Add New Course" link="/courses/add" />
      </div>
      {filteredCourses.map((course) => (
        <CourseCard course={course} authorsList={props.authors} key={course.id} />
      ))}
    </main>
  );
}

export default Courses;
