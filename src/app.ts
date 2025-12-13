import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';

export const createApp = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  // wrap expressMiddleware to avoid type mismatch between @apollo/server types and @types/express
  app.use('/graphql', express.json(), (req, res, next) => {
    // @ts-ignore - express/Apollo types currently conflict in this workspace
    return expressMiddleware(server)(req, res, next);
  });

  return app;
};
