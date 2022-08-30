import Button from '../../../../common/Button/Button';
import { Author } from '../../../../models/author.interface';
import { Course } from '../../../../models/course.interface';
import './CourseCard.scss';

interface CourseCardProps {
  course: Course;
  authorsList: Author[];
}

function getAuthors(authorsList: Author[], authorIds: string[]): string {
  return authorsList
    .filter((author: Author): boolean => authorIds.includes(author.id))
    .map((author: Author): string => author.name)
    .join(', ');
}

function CourseCard(props: CourseCardProps): JSX.Element {
  const { course, authorsList } = props;

  return (
    <div className="CourseCard">
      <h2 className="CourseCard__title">{course.title}</h2>

      <p className="CourseCard__description">{course.description}</p>

      <p className="CourseCard__creation-date">
        <b>Created: </b>
        {course.creationDate}
      </p>

      <p className="CourseCard__duration">
        <b>Duration: </b>
        {course.duration}
      </p>

      <p className="CourseCard__authors">
        <b>Authors: </b>
        {getAuthors(authorsList, course.authors)}
      </p>

      <Button buttonText="Show Course" />
    </div>
  );
}

export default CourseCard;
