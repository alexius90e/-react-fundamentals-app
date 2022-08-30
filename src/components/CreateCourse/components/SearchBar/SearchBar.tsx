import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.scss';

function SearchBar(): JSX.Element {
  return (
    <div className="SearchBar">
      <Input placeholder="Enter course name..." />
      <Button buttonText="Search" />
    </div>
  );
}

export default SearchBar;
