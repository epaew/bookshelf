import { UsecaseError } from '../errors';

export interface AuthorQueryModel {
  id: string;
  name: string;
}

export interface FetchAuthorService {
  fetch(id: string): Promise<Result<AuthorQueryModel, UsecaseError>>;
}
