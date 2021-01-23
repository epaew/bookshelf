import { ApolloError } from 'apollo-server-express';

import { FetchAuthorUsecase } from '../../../../usecases/fetch-author-usecase';
import { fetchAuthorService } from '../../../../infrastructure/query-services';
import { QueryResolvers } from '../../types';

export const author: QueryResolvers['author'] = async (_parent, { id }) => {
  const usecase = FetchAuthorUsecase(fetchAuthorService);
  const result = await usecase({ id });
  if (result.error) throw new ApolloError('Something wrong.');

  return result.value;
};
