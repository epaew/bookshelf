import { AuthorQueryModel, FetchAuthorService } from './query-services';

export const FetchAuthorUsecase = (service: FetchAuthorService) => {
  return ({ id }: { id: string }): Promise<Result<AuthorQueryModel>> => {
    return service.fetch(id);
  };
};
