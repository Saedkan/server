import cors from 'cors';
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';
export const createApp = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    app.options('*', cors());
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    app.use('/graphql', expressMiddleware(server, {
        context: async ({ req }) => ({
            token: req.headers.authorization,
        }),
    }));
    return app;
};
//# sourceMappingURL=app.js.map