import Button from '../../../../common/Button/Button';
import formatAuthors from '../../../../helpers/formatAuthors';

import formatDate from '../../../../helpers/formatDate';
import formatDuration from '../../../../helpers/formatDuration';

import { Author } from '../../../../models/author.interface';
import { Course } from '../../../../models/course.interface';
import './CourseCard.scss';

interface CourseCardProps {
  course: Course;
  authorsList: Author[];
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
