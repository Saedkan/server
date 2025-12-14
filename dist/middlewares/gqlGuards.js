import { gqlError } from '../utils/gqlError.js';
export const requireAuth = (ctx) => {
    if (!ctx.user) {
        gqlError('Unauthorized', 'UNAUTHORIZED');
    }
};
export const requireAdmin = (ctx) => {
    requireAuth(ctx);
    if (ctx.user?.role !== 'ADMIN') {
        gqlError('Forbidden', 'FORBIDDEN');
    }
};
//# sourceMappingURL=gqlGuards.js.map