import { Author } from './generated';

export type AuthorMapper = Omit<Author, 'bookSeriesConnection'>;
