import { mockedAuthorsList, mockedCoursesList } from '../../constants';
import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';
import CourseItem from './components/CourseItem/CourseCard';
import './Courses.scss';

function Courses(): JSX.Element {
  const courses: Course[] = mockedCoursesList;
  const authors: Author[] = mockedAuthorsList;

  return (
    <main className="courses">
      {courses.map((course) => (
        <CourseItem course={course} authorsList={authors} key={course.id} />
      ))}
    </main>
  );
}

export default Courses;
