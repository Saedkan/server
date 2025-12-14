import { GraphQLContext } from '../graphql/context.js';
import { gqlError } from '../utils/gqlError.js';

export const requireAuth = (ctx: GraphQLContext) => {
  if (!ctx.user) {
    gqlError('Unauthorized', 'UNAUTHORIZED');
  }
};

export const requireAdmin = (ctx: GraphQLContext) => {
  requireAuth(ctx);
  if (ctx.user?.role !== 'ADMIN') {
    gqlError('Forbidden', 'FORBIDDEN');
  }
};
