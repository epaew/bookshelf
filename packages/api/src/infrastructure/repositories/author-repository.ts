import { Author } from '../../domain/models/author';
import { AuthorRepository } from '../../domain/repositories';
import { ApplicationError } from '../../errors';
import { prisma } from '../../externals/prisma';

export const authorRepository: AuthorRepository = {
  isAuthorWithIdPresent: async id => {
    try {
      const result = await prisma.author.findUnique({ where: { id } });
      return { value: Boolean(result) };
    } catch (e) {
      console.error(e);
      return { error: new ApplicationError('UNEXPECTED_ERROR') };
    }
  },
  isAuthorWithNamePresent: async name => {
    try {
      const result = await prisma.author.findUnique({ where: { name } });
      return { value: Boolean(result) };
    } catch (e) {
      console.error(e);
      return { error: new ApplicationError('UNEXPECTED_ERROR') };
    }
  },
  save: async author => {
    const { id, ...data } = author.toObject();

    try {
      await prisma.author.upsert({ where: { id }, create: data, update: data });
      return { value: null };
    } catch (e) {
      console.error(e);
      return { error: new ApplicationError('UNEXPECTED_ERROR') };
    }
  },
};
