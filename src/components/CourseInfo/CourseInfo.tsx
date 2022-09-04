import { useParams } from 'react-router-dom';

import { mockedCoursesList } from '../../constants';
import formatDuration from '../../helpers/formatDuration';
import formatDate from '../../helpers/formatDate';

import Button from '../../common/Button/Button';

import './CourseInfo.scss';

function CourseInfo(): JSX.Element {
  const params = useParams();

  const [course] = mockedCoursesList;

  return (
    <article className="course-info">
      <div className="course-info__header">
        <Button buttonText="Back to courses" link="/" />
      </div>

      <h2 className="course-info__title">JavaScript</h2>

      <div className="course-info__info">
        <div className="course-info__description">{course.description}</div>

        <aside className="course-info__sidebar">
          <p className="course-info__id">
            <b>ID: </b>
            <span>{params.courseId}</span>
          </p>

          <p className="course-info__creation-date">
            <b>Creation Date: </b>
            <span>{formatDate(course.creationDate)}</span>
          </p>

          <p className="course-info__duration">
            <b>Duration: </b>
            <span>{formatDuration(course.duration)}</span>
          </p>

          <dl className="course-info__authors">
            <dt className="course-info__authors-title">Authors</dt>
            {course.authors.map((author) => (
              <dd key={author}>{author}</dd>
            ))}
          </dl>
        </aside>
      </div>
    </article>
  );
}

export default CourseInfo;
