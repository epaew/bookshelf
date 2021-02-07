import { nanoid } from 'nanoid';

import { Author, AuthorParams } from '../../domain/models/author';
import { AuthorId } from '../../domain/models/value-objects';
import { AuthorRepository } from '../repositories';
import { AuthorValidator } from '../validators';

interface AuthorBuildParams extends Omit<AuthorParams, 'id'> {}

export class AuthorFactory {
  #repository: AuthorRepository;

  constructor(repository: AuthorRepository) {
    this.#repository = repository;
  }

  async build({ name }: AuthorBuildParams): Promise<Result<Author>> {
    const result = await this.generateAuthorId();
    if (result.error) return result;

    return {
      value: new Author(new AuthorValidator(this.#repository), { id: result.value, name }),
    };
  }

  private async generateAuthorId(): Promise<Result<AuthorId>> {
    const value = nanoid();

    const checkResult = await this.#repository.isAuthorWithIdPresent(value);
    if (checkResult.error) return checkResult;

    if (checkResult.value) {
      return this.generateAuthorId();
    } else {
      return { value };
    }
  }
}
