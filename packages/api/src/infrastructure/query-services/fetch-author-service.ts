import { ApplicationError } from '../../errors';
import { prisma } from '../../externals/prisma';
import { FetchAuthorService } from '../../usecases/query-services';

export const fetchAuthorService: FetchAuthorService = {
  fetch: async id => {
    try {
      const author = await prisma.author.findUnique({ where: { id } });
      return { value: author };
    } catch (e) {
      console.error(e);
      return { error: new ApplicationError('UNEXPECTED_ERROR') };
    }
  },
};
