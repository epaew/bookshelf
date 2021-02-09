import { AuthorFactory } from '../domain/factories';
import { Author } from '../domain/models/author';
import { AuthorId } from '../domain/models/value-objects';
import { AuthorRepository } from '../domain/repositories';
import { ApplicationError } from '../errors';

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
  const refetchAuthor = async (id: AuthorId): Promise<Result<AuthorQueryModel>> => {
    const result = await queryService.fetch(id);
    if (result.error) return result;
    if (!result.value) return { error: new ApplicationError('RECORD_NOT_FOUND') };

    return { value: result.value };
  };

  return async (params: Params): Promise<Result<AuthorQueryModel>> => {
    const buildResult = await factory.build(params);
    if (buildResult.error) return buildResult;

    const { value: author } = buildResult;
    const validationResult = await author.validate();
    if (validationResult.error) return validationResult;

    const saveResult = await repository.save(author);
    if (saveResult.error) return saveResult;

    return refetchAuthor(author.id);
  };
};
