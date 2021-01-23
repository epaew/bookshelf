import { Author } from '../domain/models/author';

import { UsecaseError } from './errors';
import { AuthorQueryModel, FetchAuthorService } from './query-services';
import { AuthorRepository } from './repositories';

export const CreateAuthorUsecase = (service: FetchAuthorService, repository: AuthorRepository) => {
  return async ({ name }: { name: string }): Promise<Result<AuthorQueryModel, UsecaseError>> => {
    const author = new Author();
    author.name = name;

    const result = await repository.save(author);
    if (result.error) return result;

    return service.fetch(result.value.id);
  };
};
