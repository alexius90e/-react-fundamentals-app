import { useState } from 'react';
import Button from '../../../../common/Button/Button';
import { Author } from '../../../../models/author.interface';
import './AuthorItem.scss';

interface AuthorItemProps {
  author: Author;
  authorIsAdded?: boolean;
  addAuthor: (authorId: string) => void;
  deleteAuthor: (authorId: string) => void;
}

function AuthorItem(props: AuthorItemProps): JSX.Element {
  const [authorIsAdded, setAuthorIsAdded] = useState(props.authorIsAdded ?? false);

  const handleAuthorStatusChange = (): void => {
    const authorId = props.author.id;
    authorIsAdded ? props.deleteAuthor(authorId) : props.addAuthor(authorId);
    setAuthorIsAdded(!authorIsAdded);
  };

  return (
    <div className="AuthorItem">
      <span>{props.author.name}</span>
      <Button
        buttonText={authorIsAdded ? 'Delete Author' : 'Add Author'}
        onClick={handleAuthorStatusChange}
      />
    </div>
  );
}

export default AuthorItem;
