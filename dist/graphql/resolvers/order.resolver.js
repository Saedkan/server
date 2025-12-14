import { Order } from '../../models/Order.js';
import { pubsub, ORDER_UPDATED } from '../../utils/pubsub.js';
import { requireAuth } from '../../middlewares/gqlGuards.js';
export const orderResolver = {
    Query: {
        getMyOrders: (_, __, ctx) => {
            requireAuth(ctx);
            return Order.find({ userId: ctx.user.id, isDeleted: false });
        },
    },
    Mutation: {
        createOrder: async (_, __, ctx) => {
            requireAuth(ctx);
            const order = await Order.create({
                userId: ctx.user.id,
                items: [],
                totalPrice: 0,
            });
            return order;
        },
    },
    Subscription: {
        orderStatusUpdated: {
            subscribe: () => pubsub.asyncIterator([ORDER_UPDATED]),
        },
    },
};
//# sourceMappingURL=order.resolver.js.map