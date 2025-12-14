import { verifyToken } from '../utils/jwt.js';
export const createContext = async ({ req, }) => {
    const authHeader = req.headers.authorization;
    let user = null;
    if (authHeader?.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const payload = verifyToken(token);
                user = {
                    id: payload.id,
                    role: payload.role,
                    email: payload.email,
                };
            }
            catch (e) {
                user = null;
            }
        }
    }
    return { req, user };
};
//# sourceMappingURL=context.js.map