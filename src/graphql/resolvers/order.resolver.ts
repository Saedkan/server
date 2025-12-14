import { Order } from '../../models/Order.js';
import { pubsub, ORDER_UPDATED } from '../../utils/pubsub.js';
import { requireAuth } from '../../middlewares/gqlGuards.js';

export const orderResolver = {
  Query: {
    getMyOrders: (_: any, __: any, ctx: any) => {
      requireAuth(ctx);
      return Order.find({ userId: ctx.user.id, isDeleted: false });
    },
  },

  Mutation: {
    createOrder: async (_: any, __: any, ctx: any) => {
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
