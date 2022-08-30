import Button from '../../../../common/Button/Button';
import { Author } from '../../../../models/author.interface';
import { Course } from '../../../../models/course.interface';
import './CourseCard.scss';

interface CourseCardProps {
  course: Course;
  authorsList: Author[];
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('ru');
}

function formatDuration(duration: number): string {
  const MINUTES_IN_HOUR = 60;

  const minutes = duration % MINUTES_IN_HOUR;
  const minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;

  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const hoursString = hours >= 10 ? `${hours}` : `0${hours}`;

  return `${hoursString}:${minutesString} ${hours > 1 ? 'hours' : 'hour'}`;
}

function formatAuthors(authorsList: Author[], authorIds: string[]): string {
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
        {formatDate(course.creationDate)}
      </p>

      <p className="CourseCard__duration">
        <b>Duration: </b>
        {formatDuration(course.duration)}
      </p>

      <p className="CourseCard__authors">
        <b>Authors: </b>
        {formatAuthors(authorsList, course.authors)}
      </p>

      <Button buttonText="Show Course" />
    </div>
  );
}

export default CourseCard;
