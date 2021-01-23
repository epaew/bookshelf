import { Author } from '../../domain/models/author';
import { UsecaseError } from '../errors';

export interface AuthorRepository {
  save(author: Author): Promise<Result<Author, UsecaseError>>;
}
