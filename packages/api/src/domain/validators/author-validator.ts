import { ApplicationError } from '../../errors';
import { Author } from '../models/author';
import { AuthorRepository } from '../repositories';

export class AuthorValidator {
  #repository: AuthorRepository;

  constructor(repository: AuthorRepository) {
    this.#repository = repository;
  }

  async validate(author: Author): Promise<Result<boolean>> {
    return this.validateAuthorName(author);
  }

  private async validateAuthorName({ name }: Author): Promise<Result<boolean>> {
    const result = await this.#repository.isAuthorWithNamePresent(name);
    if (result.error) return result;

    if (result.value) {
      return {
        error: new ApplicationError('RECORD_INVALID', { entityName: 'Author', invalidFields: { name: 'not_unique' } }),
      };
    } else {
      return { value: true };
    }
  }
}
