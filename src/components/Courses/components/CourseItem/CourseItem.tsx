import Button from '../../../../common/Button/Button';
import { Author } from '../../../../models/author.interface';
import { Course } from '../../../../models/course.interface';
import './CourseItem.scss';

interface CourseProps {
  course: Course;
  authorsList: Author[];
}

function getAuthors(authorsList: Author[], authorIds: string[]): string {
  return authorsList
    .filter((author: Author): boolean => authorIds.includes(author.id))
    .map((author: Author): string => author.name)
    .join(', ');
}

function CourseItem(props: CourseProps): JSX.Element {
  const { course, authorsList } = props;

  return (
    <div className="CourseItem">
      <h2 className="CourseItem__title">{course.title}</h2>

      <p className="CourseItem__description">{course.description}</p>

      <p className="CourseItem__creation-date">
        <b>Created: </b>
        {course.creationDate}
      </p>

      <p className="CourseItem__duration">
        <b>Duration: </b>
        {course.duration}
      </p>

      <p className="CourseItem__authors">
        <b>Authors: </b>
        {getAuthors(authorsList, course.authors)}
      </p>

      <Button buttonText="Show Course" />
    </div>
  );
}

export default CourseItem;
