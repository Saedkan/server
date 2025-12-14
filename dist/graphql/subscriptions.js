import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/use/ws';
import { verifyToken } from '../utils/jwt.js';
/**
 * Создаёт WS-сервер для GraphQL Subscriptions
 * Используется graphql-ws
 */
export const setupSubscriptions = (httpServer, schema) => {
    const wsServer = new WebSocketServer({
        server: httpServer,
        path: '/graphql',
    });
    useServer({
        schema,
        /**
         * Context для subscriptions
         * Аналогично HTTP context, но через connectionParams
         */
        context: async (ctx) => {
            const authHeader = ctx.connectionParams?.authorization ||
                ctx.connectionParams?.Authorization;
            let user = null;
            if (typeof authHeader === 'string' &&
                authHeader.startsWith('Bearer ')) {
                const token = authHeader.replace('Bearer ', '');
                try {
                    const payload = verifyToken(token);
                    user = {
                        id: payload.id,
                        role: payload.role,
                        email: payload.email,
                    };
                }
                catch {
                    user = null;
                }
            }
            return { user };
        },
        /**
         * Можно логировать подключения (плюс на защите)
         */
        onConnect: () => {
            console.log('🔌 GraphQL WS connected');
        },
        onDisconnect: () => {
            console.log('❌ GraphQL WS disconnected');
        },
    }, wsServer);
    console.log('🚀 GraphQL Subscriptions ready');
};
//# sourceMappingURL=subscriptions.js.map