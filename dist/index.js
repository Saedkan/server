import { createServer } from 'http';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { createApp } from './app.js';
(async () => {
    await connectDB();
    const app = await createApp();
    const httpServer = createServer(app);
    // If you need schema for setupSubscriptions, you must refactor createApp to return it, or get it from ApolloServer instance.
    // setupSubscriptions(httpServer, schema); // <-- Commented out until schema is available
    httpServer.listen(env.PORT, () => {
        console.log(`🚀 Server ready at http://localhost:${env.PORT}/graphql`);
    });
})();
//# sourceMappingURL=index.js.map