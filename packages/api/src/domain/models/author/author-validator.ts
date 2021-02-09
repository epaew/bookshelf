import { Author } from '.';

export interface AuthorValidator {
  validate(author: Author): Promise<Result<true>>;
}
