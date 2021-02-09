import { AuthorId } from '../domain/models/value-objects';
import { ApplicationError } from '../errors';

import { AuthorQueryModel, FetchAuthorService } from './query-services';

export const FetchAuthorUsecase = (service: FetchAuthorService) => {
  return async ({ id }: { id: AuthorId }): Promise<Result<AuthorQueryModel>> => {
    const fetchResult = await service.fetch(id);
    if (fetchResult.error) return fetchResult;
    if (!fetchResult.value) return { error: new ApplicationError('RECORD_NOT_FOUND') };

    return { value: fetchResult.value };
  };
};
