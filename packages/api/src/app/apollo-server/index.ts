import fs from 'fs';
import path from 'path';

import { ApolloServer, gql } from 'apollo-server-express';

import { isDevelopmentEnv } from '../../config';

import { resolvers } from './resolvers';

const typeDefs = gql(fs.readFileSync(path.join(__dirname, '../../../schema.graphql'), 'utf8'));

export const apolloServer = new ApolloServer({
  debug: isDevelopmentEnv,
  resolvers,
  typeDefs,
  mocks: true,
  mockEntireSchema: false,
});
