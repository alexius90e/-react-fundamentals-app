import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';

import formatDuration from '../../helpers/formatDuration';
import getCurrentDate from '../../helpers/getCurrentDate';

import './CreateCourse.scss';

interface CreateCourseProps {
  authors: Author[];
  createCourse: (course: Course) => void;
  createAuthor: (author: Author) => Author;
}

function CreateCourse(props: CreateCourseProps): JSX.Element {
  const initialCourseValues: Course = {
    id: uuidv4(),
    title: '',
    description: '',
    creationDate: getCurrentDate(),
    duration: 0,
    authors: [],
  };

  const [authors, setAuthors] = useState(props.authors);
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newCourse, setNewCourse] = useState(initialCourseValues);

  const handleCourseCreateClick = (): void => props.createCourse(newCourse);

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewCourse({ ...newCourse, title: event.target.value });
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewCourse({ ...newCourse, description: event.target.value });
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewCourse({ ...newCourse, duration: Number(event.target.value) });
  };

  const handleAuthorNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewAuthorName(event.target.value);
  };

  const handleCreateAuthor = (): void => {
    if (newAuthorName.length < 2) return;
    const newAuthor: Author = { id: uuidv4(), name: newAuthorName };
    setAuthors([...authors, props.createAuthor(newAuthor)]);
    setNewAuthorName('');
  };

  const handleAddAuthor = (authorId: string): void => {
    const authors = Array.from(new Set([...newCourse.authors, authorId]));
    setNewCourse({ ...newCourse, authors });
  };

  const handleDeleteAuthor = (authorId: string): void => {
    const authors = newCourse.authors.filter((id) => id !== authorId);
    setNewCourse({ ...newCourse, authors });
  };

  const renderAuthorItem = (author: Author, isAdded?: boolean): JSX.Element => (
    <AuthorItem
      key={author.id}
      author={author}
      addAuthor={handleAddAuthor}
      deleteAuthor={handleDeleteAuthor}
      authorIsAdded={isAdded ?? false}
    />
  );

  return (
    <div className="CreateCourse">
      <div className="CreateCourse__header">
        <Input
          label="Title"
          placeholder="Enter title"
          onChange={(event) => handleTitleChange(event)}
        />
        <Button buttonText="Create Course" link="/courses" onClick={handleCourseCreateClick} />
      </div>
      <Input
        label="Description"
        placeholder="Enter Description"
        onChange={(event) => handleDescriptionChange(event)}
      />

      <div className="CreateCourse__authors">
        <div className="CreateCourse__authors-add CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Add author</h3>
          <Input
            label="Author name"
            placeholder="Enter Author name"
            value={newAuthorName}
            onChange={(event) => handleAuthorNameChange(event)}
          />
          <div className="CreateCourse__authors-add-wrapper">
            <Button onClick={handleCreateAuthor} buttonText="Create author" />
          </div>
        </div>

        <div className="CreateCourse__authors-list CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Authors</h3>
          {authors
            .filter((author: Author): boolean => !newCourse.authors.includes(author.id))
            .map((author: Author) => renderAuthorItem(author))}
        </div>

        <div className="CreateCourse__authors-duration CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Duration</h3>
          <Input
            label="Duration"
            placeholder="Enter duration in minutes"
            type="number"
            onChange={(event) => handleDurationChange(event)}
          />
          <div className="CreateCourse__authors-duration-message">
            Duration {formatDuration(newCourse.duration)}
          </div>
        </div>

        <div className="CreateCourse__authors-course CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Course Authors</h3>
          {authors
            .filter((author: Author): boolean => newCourse.authors.includes(author.id))
            .map((author: Author) => renderAuthorItem(author, true))}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
