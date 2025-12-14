import { Request } from 'express';
import { verifyToken } from '../utils/jwt.js';

export interface GraphQLContext {
  req: Request;
  user: null | {
    id: string;
    role: 'USER' | 'ADMIN';
    email: string;
  };
}

export const createContext = async ({
  req,
}: {
  req: Request;
}): Promise<GraphQLContext> => {
  const authHeader = req.headers.authorization;
  let user = null;

  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    if (token) {
      try {
        const payload = verifyToken(token) as any;
      user = {
        id: payload.id,
        role: payload.role,
        email: payload.email,
        };
      } catch (e) {
        user = null;
      }
    }
  }

  return { req, user };
};
