import Button from '../../common/Button/Button';
import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';
import CourseItem from './components/CourseItem/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import './Courses.scss';

function Courses(): JSX.Element {
  const courses: Course[] = mockedCoursesList;
  const authors: Author[] = mockedAuthorsList;

  return (
    <main className="Courses">
      <div className="Courses__filter">
        <SearchBar />
        <Button buttonText="Add New Course" />
      </div>
      {courses.map((course) => (
        <CourseItem course={course} authorsList={authors} key={course.id} />
      ))}
    </main>
  );
}

export default Courses;
