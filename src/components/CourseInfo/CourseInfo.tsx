import { useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';

function CourseInfo(): JSX.Element {
  const params = useParams();

  return (
    <>
      <div>{params.courseId}</div>
      <div>
        <Button buttonText="Back" link="/" />
      </div>
    </>
  );
}

export default CourseInfo;
