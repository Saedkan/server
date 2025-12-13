import { createServer } from 'http';
import { createApp } from './app.js';
import { connectDB } from './config/db.js';
import { env } from './config/env.js';
(async () => {
    await connectDB();
    const app = await createApp();
    const httpServer = createServer(app);
    httpServer.listen(env.PORT, () => console.log(`Server running on ${env.PORT}`));
})();
//# sourceMappingURL=index.js.map