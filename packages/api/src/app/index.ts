import express from 'express';

import { apolloServer } from './apollo-server';

const app = express();

apolloServer.applyMiddleware({ app });

export { app };
