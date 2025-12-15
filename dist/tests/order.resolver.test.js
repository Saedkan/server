import { orderResolver } from '../graphql/resolvers/order.resolver.js';
import { User } from '../models/User.js';
describe('Order Resolver', () => {
    it('creates order for user', async () => {
        const user = await User.create({
            email: 'o@mail.com',
            passwordHash: 'hash',
            name: 'User',
        });
        const order = await orderResolver.Mutation.createOrder({}, {}, { user: { id: user.id } });
        expect(order.userId.toString()).toBe(user.id);
    });
});
//# sourceMappingURL=order.resolver.test.js.map