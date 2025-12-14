import { Review } from '../../models/Review.js';
import { requireAuth } from '../../middlewares/gqlGuards.js';
import { createReviewSchema } from '../../validators/review.schema.js';
export const reviewResolver = {
    Query: {
        getReviewsByManga: (_, { mangaId }) => Review.find({ mangaId, isDeleted: false }),
    },
    Mutation: {
        createReview: async (_, args, ctx) => {
            requireAuth(ctx);
            const data = createReviewSchema.parse(args);
            return Review.create({
                ...data,
                userId: ctx.user.id,
            });
        },
    },
};
//# sourceMappingURL=review.resolver.js.map