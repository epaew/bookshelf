import { ApplicationError } from '../../errors';
import { prisma } from '../../externals/prisma';
import { FetchAuthorService } from '../../usecases/query-services';

export const fetchAuthorService: FetchAuthorService = {
  fetch: async id => {
    const author = await prisma.author.findUnique({ where: { id } });
    if (author) return { value: author };

    return { error: new ApplicationError('FetchAuthorService::EntityNotFoundError') };
  },
};
