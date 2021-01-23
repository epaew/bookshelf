import { Author } from '../../domain/models/author';
import { prisma } from '../../externals/prisma';
import { EntityNotSavedError } from '../../usecases/errors';
import { AuthorRepository } from '../../usecases/repositories';

export const authorRepository: AuthorRepository = {
  save: async author => {
    const { id, ...data } = author.toObject();

    try {
      const result = await (async () => {
        if (id) {
          return prisma.author.update({ where: { id }, data });
        } else {
          return prisma.author.create({ data });
        }
      })();
      return { value: new Author(result) }
    } catch (e) {
      console.error(e);
      return { error: new EntityNotSavedError() };
    }
  },
};
