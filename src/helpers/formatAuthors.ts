import { Author } from '../models/author.interface';

function formatAuthors(authorsList: Author[], authorIds: string[]): string {
  return authorsList
    .filter((author: Author): boolean => authorIds.includes(author.id))
    .map((author: Author): string => author.name)
    .join(', ');
}

export default formatAuthors;
