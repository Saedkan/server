import { UnauthorizedError, ForbiddenError } from './error.js';
export const authGuard = (ctx) => {
    if (!ctx.user)
        throw UnauthorizedError();
};
export const adminGuard = (ctx) => {
    authGuard(ctx);
    if (ctx.user.role !== 'ADMIN') {
        throw ForbiddenError();
    }
};
//# sourceMappingURL=auth.js.map