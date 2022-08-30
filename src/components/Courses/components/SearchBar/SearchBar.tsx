import { ChangeEvent, useState } from 'react';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

function SearchBar(props: SearchBarProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="SearchBar">
      <Input onChange={handleSearchInputChange} type="search" placeholder="Enter course name..." />
      <Button onClick={() => props.onSearch(searchQuery)} buttonText="Search" />
    </div>
  );
}

export default SearchBar;
