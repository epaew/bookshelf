import { Resolvers } from '../types';

import { author } from './author';

export const resolvers: Resolvers = {
  Query: {
    author,
  },
};
