import { z } from 'zod';
export const createReviewSchema = z.object({
    mangaId: z.string(),
    rating: z.number().min(1).max(5),
    comment: z.string().min(5),
});
//# sourceMappingURL=review.schema.js.map