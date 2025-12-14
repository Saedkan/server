import { UnauthorizedError, ForbiddenError } from './error.js';

export const authGuard = (ctx: any) => {
  if (!ctx.user) throw UnauthorizedError();
};

export const adminGuard = (ctx: any) => {
  authGuard(ctx);
  if (ctx.user.role !== 'ADMIN') {
    throw ForbiddenError();
  }
};