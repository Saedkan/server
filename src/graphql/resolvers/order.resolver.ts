import { Order } from '../../models/Order.js';
import { pubsub, ORDER_UPDATED } from '../../utils/pubsub.js';
import { adminGuard, authGuard } from '../../middlewares/auth.js';

export const orderResolver = {
  Query: {
    getMyOrders: async (_: any, __: any, ctx: any) => {
      authGuard(ctx);
      return Order.find({ userId: ctx.user.id });
    },
  },

  Mutation: {
    updateOrderStatus: async (_: any, { orderId, status }: any, ctx: any) => {
      adminGuard(ctx);
      const order = await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );
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
