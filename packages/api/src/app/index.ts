import express from 'express';

import { apolloServer } from './apollo-server';

export const getApp = async () => {
  const app = express();

  await apolloServer.start();
  app.use(apolloServer.getMiddleware());

  return app;
};
