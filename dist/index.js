import { createServer } from 'http';
import { createApp } from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { Manga } from './models/Manga.js';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers/index.js';
import { execute, subscribe } from 'graphql';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/use/ws';
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});
async function start() {
    try {
        await connectDB();
        // Seed sample mangas if collection is empty
        try {
            const count = await Manga.countDocuments();
            if (count === 0) {
                console.log('Seeding sample mangas...');
                await Manga.create([
                    { title: 'Naruto', price: 9.99, genres: ['Action', 'Adventure'] },
                    { title: 'One Piece', price: 12.5, genres: ['Adventure', 'Comedy'] },
                    { title: 'Berserk', price: 14.0, genres: ['Dark Fantasy'] },
                    { title: 'Sailor Moon', price: 7.5, genres: ['Magical Girl', 'Romance'] },
                ]);
            }
        }
        catch (e) {
            console.warn('Failed to seed mangas:', e);
        }
        const app = await createApp();
        const httpServer = createServer(app);
        // Create executable schema for websocket subscriptions
        const schema = makeExecutableSchema({ typeDefs, resolvers });
        // Create WebSocket server for /graphql
        const wsServer = new WebSocketServer({ server: httpServer, path: '/graphql' });
        // Hand over the schema to graphql-ws
        useServer({ schema, execute, subscribe }, wsServer);
        httpServer.listen(env.PORT, () => console.log(`Server running on ${env.PORT}`));
    }
    catch (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
    }
}
start();
//# sourceMappingURL=index.js.map