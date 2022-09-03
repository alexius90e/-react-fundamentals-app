import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Author } from '../../models/author.interface';
import { Course } from '../../models/course.interface';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import AuthorItem from './components/AuthorItem/AuthorItem';
import formatDuration from '../../helpers/formatDuration';
import './CreateCourse.scss';

interface CreateCourseProps {
  authors: Author[];
}

function CreateCourse(props: CreateCourseProps): JSX.Element {
  const initialCourseValues: Course = {
    id: uuidv4(),
    title: '',
    description: '',
    creationDate: new Date(Date.now()).toLocaleString('en', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    }),
    duration: 0,
    authors: [],
  };

  const [courseValues, setCourseValues] = useState(initialCourseValues);
  const [authors, setAuthors] = useState(props.authors);
  const [newAuthorName, setNewAuthorName] = useState('');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    options: { title?: boolean; description?: boolean; duration?: boolean }
  ): void => {
    const eventValue = event.target.value;
    const title = options.title === true ? eventValue : courseValues.title;
    const description = options.description === true ? eventValue : courseValues.description;
    const duration = options.duration === true ? Number(eventValue) : courseValues.duration;
    setCourseValues({ ...courseValues, title, description, duration });
  };

  const handleAuthorNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewAuthorName(event.target.value);
  };

  const createAuthor = (): void => {
    if (newAuthorName.length < 2) return;
    const newAuthor: Author = { id: uuidv4(), name: newAuthorName };
    setAuthors([...authors, newAuthor]);
    setNewAuthorName('');
  };

  const addAuthor = (authorId: string): void => {
    if (courseValues.authors.includes(authorId)) return;
    const authors = [...courseValues.authors, authorId];
    setCourseValues({ ...courseValues, authors });
  };

  const deleteAuthor = (authorId: string): void => {
    const authors = courseValues.authors.filter((id) => id !== authorId);
    setCourseValues({ ...courseValues, authors });
  };

  return (
    <div className="CreateCourse">
      <div className="CreateCourse__header">
        <Input
          onChange={(event) => handleInputChange(event, { title: true })}
          label="Title"
          placeholder="Enter title"
        />
        <Button buttonText="Create Course" link="/courses"></Button>
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
            <Button onClick={createAuthor} buttonText="Create author" />
          </div>
        </div>

        <div className="CreateCourse__authors-list CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Authors</h3>
          {authors
            .filter((author: Author): boolean => !courseValues.authors.includes(author.id))
            .map(
              (author: Author): JSX.Element => (
                <AuthorItem
                  key={author.id}
                  author={author}
                  addAuthor={addAuthor}
                  deleteAuthor={deleteAuthor}
                />
              )
            )}
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
            Duration {formatDuration(courseValues.duration)}
          </div>
        </div>

        <div className="CreateCourse__authors-course CreateCourse__authors-item">
          <h3 className="CreateCourse__heading">Course Authors</h3>
          {authors
            .filter((author: Author): boolean => courseValues.authors.includes(author.id))
            .map(
              (author: Author): JSX.Element => (
                <AuthorItem
                  key={author.id}
                  author={author}
                  authorIsAdded={true}
                  addAuthor={addAuthor}
                  deleteAuthor={deleteAuthor}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
