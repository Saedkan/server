import { reviewResolver } from '../graphql/resolvers/review.resolver.js';
import { Manga } from '../models/Manga.js';
import { User } from '../models/User.js';
describe('Review Resolver', () => {
    it('creates review', async () => {
        const user = await User.create({
            email: 'r@mail.com',
            passwordHash: 'hash',
            name: 'User',
        });
        const manga = await Manga.create({
            title: 'Bleach',
            description: 'Soul reapers',
            price: 8,
            stock: 3,
            genres: ['Action'],
            coverImage: 'img.jpg',
        });
        const res = await reviewResolver.Mutation.createReview({}, { mangaId: manga.id, rating: 5, comment: 'Great!' }, { user: { id: user.id } });
        expect(res.rating).toBe(5);
    });
    it('gets reviews by manga', async () => {
        const res = await reviewResolver.Query.getReviewsByManga({}, { mangaId: 'someId' });
        expect(Array.isArray(res)).toBe(true);
    });
});
//# sourceMappingURL=review.resolver.test.js.map