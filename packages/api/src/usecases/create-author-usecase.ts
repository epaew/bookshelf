import { AuthorFactory } from '../domain/factories';
import { Author } from '../domain/models/author';
import { AuthorRepository } from '../domain/repositories';

import { AuthorQueryModel, FetchAuthorService } from './query-services';

interface UsecaseParams {
  factory: AuthorFactory;
  queryService: FetchAuthorService;
  repository: AuthorRepository;
}

interface Params {
  name: string;
}

export const CreateAuthorUsecase = ({ factory, queryService, repository }: UsecaseParams) => {
  return async (params: Params): Promise<Result<AuthorQueryModel>> => {
    const buildResult = await factory.build(params);
    if (buildResult.error) return buildResult;

    const { value: author } = buildResult;
    const validationResult = await author.validate();
    if (validationResult.error) return validationResult;

    const saveResult = await repository.save(author);
    if (saveResult.error) return saveResult;

    return queryService.fetch(author.id) as Promise<Result<AuthorQueryModel>>;
  };
};
