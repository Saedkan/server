import { verifyToken } from '../utils/jwt.js';

export const authGuard = (context: any) => {
  if (!context.user) throw new Error('UNAUTHORIZED');
};

export const adminGuard = (context: any) => {
  authGuard(context);
  if (context.user.role !== 'ADMIN') {
    throw new Error('FORBIDDEN');
  }
};
