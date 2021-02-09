import { ApplicationError } from '../../errors';
import { Author } from '../models/author';
import { AuthorRepository } from '../repositories';

import { BaseValidator } from './base-validator';

export class AuthorValidator extends BaseValidator {
  #repository: AuthorRepository;

  constructor(repository: AuthorRepository) {
    super('Author');

    this.#repository = repository;
  }

  async validate(author: Author): Promise<Result<true>> {
    this.errorRecordInfoBuilder.clear();

    // validate each fields
    const validationResults = await Promise.all([this.validateAuthorName(author)]);

    // return error if `Err` is present
    const errorResult = validationResults.find((result): result is Err => !!result.error);
    if (errorResult) return errorResult;

    // return error if invalid fields are present
    const errorRecordInfo = this.errorRecordInfoBuilder.build();
    if (errorRecordInfo) return { error: new ApplicationError('RECORD_INVALID', errorRecordInfo) };

    // return true when the all fields are valid.
    return { value: true };
  }

  private async validateAuthorName({ name }: Author): Promise<Result<true>> {
    const result = await this.#repository.isAuthorWithNamePresent(name);
    if (result.error) return result;
    if (result.value) this.errorRecordInfoBuilder.push('name', 'not_unique');

    return { value: true };
  }
}
