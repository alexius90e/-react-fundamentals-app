import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';

import './CreateCourse.scss';

function CreateCourse(): JSX.Element {
  return (
    <div className="CreateCourse">
      <SearchBar />
      <Button buttonText="Add New Course" />
    </div>
  );
}

export default CreateCourse;
