import { orderResolver } from './order.resolver.js';
import { userResolver } from './user.resolver.js';
import { mangaResolver } from './manga.resolver.js';
import { reviewResolver } from './review.resolver.js';

export const resolvers = [
  orderResolver,
  userResolver,
  mangaResolver,
  reviewResolver,
];
