import { Author } from '../../domain/models/author';
import { AuthorId, AuthorName } from '../../domain/models/value-objects';

export interface AuthorRepository {
  isAuthorWithIdPresent(id: AuthorId): Promise<Result<boolean>>;
  isAuthorWithNamePresent(name: AuthorName): Promise<Result<boolean>>;
  save(author: Author): Promise<Result<null>>;
}
