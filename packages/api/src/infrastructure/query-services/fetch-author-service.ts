import { prisma } from '../../externals/prisma';
import { EntityNotFoundError } from '../../usecases/errors';
import { FetchAuthorService } from '../../usecases/query-services';

export const fetchAuthorService: FetchAuthorService = {
  fetch: async id => {
    const author = await prisma.author.findFirst({ where: { id } });
    if (author) return { value: author };

    return { error: new EntityNotFoundError() };
  },
};
