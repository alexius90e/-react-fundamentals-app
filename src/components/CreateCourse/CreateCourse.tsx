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

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    options: { title?: boolean; description?: boolean; duration?: boolean }
  ): void => {
    const eventValue = event.target.value;
    const title = options.title === true ? eventValue : newCourse.title;
    const description = options.description === true ? eventValue : newCourse.description;
    const duration = options.duration === true ? Number(eventValue) : newCourse.duration;
    setNewCourse({ ...newCourse, title, description, duration });
  };

  const handleAuthorNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewAuthorName(event.target.value);
  };

  const handleAuthorCreateClick = (): void => {
    if (newAuthorName.length < 2) return;
    const newAuthor: Author = { id: uuidv4(), name: newAuthorName };
    setAuthors([...authors, props.createAuthor(newAuthor)]);
    setNewAuthorName('');
  };

  const handleAuthorAddClick = (authorId: string): void => {
    if (newCourse.authors.includes(authorId)) return;
    const authors = [...newCourse.authors, authorId];
    setNewCourse({ ...newCourse, authors });
  };

  const deleteAuthor = (authorId: string): void => {
    const authors = newCourse.authors.filter((id) => id !== authorId);
    setNewCourse({ ...newCourse, authors });
  };

  const renderAuthorItem = (author: Author): JSX.Element => (
    <AuthorItem
      key={author.id}
      author={author}
      addAuthor={handleAuthorAddClick}
      deleteAuthor={deleteAuthor}
    />
  );

  return (
    <div className="CreateCourse">
      <div className="CreateCourse__header">
        <Input
          onChange={(event) => handleInputChange(event, { title: true })}
          label="Title"
          placeholder="Enter title"
        />
        <Button
          buttonText="Create Course"
          link="/courses"
          onClick={handleCourseCreateClick}
        ></Button>
      </div>
      <Input
        onChange={(event) => handleInputChange(event, { description: true })}
        label="Description"
        placeholder="Enter Description"
      />

      <div className="CreateCourse__authors">
        <div className="CreateCourse__authors-add CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Add author</h3>
          <Input
            onChange={(event) => handleAuthorNameChange(event)}
            label="Author name"
            placeholder="Enter Author name"
            value={newAuthorName}
          />
          <div className="CreateCourse__authors-add-wrapper">
            <Button onClick={handleAuthorCreateClick} buttonText="Create author" />
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
            onChange={(event) => handleInputChange(event, { duration: true })}
          />
          <div className="CreateCourse__authors-duration-message">
            Duration {formatDuration(newCourse.duration)}
          </div>
        </div>

        <div className="CreateCourse__authors-course CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Course Authors</h3>
          {authors
            .filter((author: Author): boolean => newCourse.authors.includes(author.id))
            .map((author: Author) => renderAuthorItem(author))}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
