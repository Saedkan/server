import bcrypt from 'bcrypt';
import { User } from '../../models/User.js';
import { signToken } from '../../utils/jwt.js';
import { gqlError } from '../../utils/gqlError.js';
import { registerSchema, loginSchema } from '../../validators/auth.schema.js';
import { requireAuth } from '../../middlewares/gqlGuards.js';
export const userResolver = {
    Query: {
        me: async (_, __, ctx) => {
            if (!ctx.user)
                return null;
            return User.findById(ctx.user.id);
        },
    },
    Mutation: {
        register: async (_, args) => {
            const data = registerSchema.parse(args);
            const exists = await User.findOne({ email: data.email });
            if (exists)
                gqlError('Email already exists', 'BAD_REQUEST');
            const hash = await bcrypt.hash(data.password, 10);
            const user = await User.create({
                email: data.email,
                passwordHash: hash,
                name: data.name,
            });
            return {
                token: signToken({ id: user.id, role: user.role }),
                user,
            };
        },
        login: async (_, args) => {
            const data = loginSchema.parse(args);
            const user = await User.findOne({ email: data.email });
            if (!user)
                gqlError('Invalid credentials', 'UNAUTHORIZED');
            const ok = await bcrypt.compare(data.password, user.passwordHash);
            if (!ok)
                gqlError('Invalid credentials', 'UNAUTHORIZED');
            return {
                token: signToken({ id: user.id, role: user.role }),
                user,
            };
        },
        updateProfile: async (_, { name }, ctx) => {
            requireAuth(ctx);
            const user = await User.findByIdAndUpdate(ctx.user.id, { name }, { new: true });
            if (!user) {
                gqlError('User not found', 'NOT_FOUND');
            }
            return user;
        }
    },
};
//# sourceMappingURL=user.resolver.js.map