import { UsecaseError } from './errors';
import { AuthorQueryModel, FetchAuthorService } from './query-services';

export const FetchAuthorUsecase = (service: FetchAuthorService) => {
  return ({ id }: { id: string }): Promise<Result<AuthorQueryModel, UsecaseError>> => {
    return service.fetch(id);
  };
};
