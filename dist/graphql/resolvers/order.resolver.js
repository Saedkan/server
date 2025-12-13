import { Order } from '../../models/Order.js';
import { pubsub, ORDER_UPDATED } from '../../utils/pubsub.js';
import { adminGuard, authGuard } from '../../middlewares/auth.js';
export const orderResolver = {
    Query: {
        getMyOrders: async (_, __, ctx) => {
            authGuard(ctx);
            return Order.find({ userId: ctx.user.id });
        },
    },
    Mutation: {
        updateOrderStatus: async (_, { orderId, status }, ctx) => {
            adminGuard(ctx);
            const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
            pubsub.publish(ORDER_UPDATED, { orderStatusUpdated: order });
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