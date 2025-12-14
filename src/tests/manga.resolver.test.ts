import { mangaResolver } from '../graphql/resolvers/manga.resolver.js';
import { Manga } from '../models/Manga.js';

const adminCtx = { user: { id: '1', role: 'ADMIN' } };

describe('Manga Resolver', () => {
  it('creates manga as admin', async () => {
    const manga = await mangaResolver.Mutation.createManga(
      {},
      {
        title: 'Naruto',
        description: 'Shinobi manga',
        price: 10,
        stock: 5,
        genres: ['Action'],
        coverImage: 'img.jpg',
      },
      adminCtx
    );

    expect(manga.title).toBe('Naruto');
  });

  it('gets mangas list', async () => {
    await Manga.create({
      title: 'One Piece',
      description: 'Pirates',
      price: 12,
      stock: 10,
      genres: ['Adventure'],
      coverImage: 'img.jpg',
    });

    const res = await mangaResolver.Query.getMangas();
    expect(res.length).toBe(1);
  });

  it('search manga by title', async () => {
    const res = await mangaResolver.Query.searchManga(
      {},
      { query: 'One' }
    );
    expect(res.length).toBeGreaterThanOrEqual(0);
  });
});
