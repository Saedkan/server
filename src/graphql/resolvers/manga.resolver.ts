import { Manga } from '../../models/Manga.js';
import { requireAdmin } from '../../middlewares/gqlGuards.js';
import { createMangaSchema } from '../../validators/manga.schema.js';

export const mangaResolver = {
  Query: {
    getMangas: () => Manga.find({ isDeleted: false }),
    getMangaById: (_: any, { id }: any) =>
      Manga.findOne({ _id: id, isDeleted: false }),
    searchManga: (_: any, { query }: any) =>
      Manga.find({ title: new RegExp(query, 'i'), isDeleted: false }),
  },

  Mutation: {
    createManga: async (_: any, args: any, ctx: any) => {
      requireAdmin(ctx);
      const data = createMangaSchema.parse(args);
      return Manga.create(data);
    },

    updateManga: async (_: any, args: any, ctx: any) => {
      requireAdmin(ctx);
      return Manga.findByIdAndUpdate(args.id, args, { new: true });
    },
  },
};
