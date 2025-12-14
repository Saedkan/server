import { Request } from 'express';
export interface GraphQLContext {
    req: Request;
    user: null | {
        id: string;
        role: 'USER' | 'ADMIN';
        email: string;
    };
}
export declare const createContext: ({ req, }: {
    req: Request;
}) => Promise<GraphQLContext>;
//# sourceMappingURL=context.d.ts.map