import { Manga } from '../../models/Manga.js';
import { requireAdmin } from '../../middlewares/gqlGuards.js';
import { createMangaSchema } from '../../validators/manga.schema.js';

export const mangaResolver = {
  Query: {
    // Получить все манги
    getMangas: async () => {
      // создаём новый Query каждый раз
      return await Manga.find({ isDeleted: false }).exec();
    },

    // Получить мангу по ID
    getMangaById: async (_: any, { id }: { id: string }) => {
      return await Manga.findOne({ _id: id, isDeleted: false }).exec();
    },

    // Поиск манги по названию
    searchManga: async (_: any, { query }: { query: string }) => {
      return await Manga.find({
        title: new RegExp(query, 'i'),
        isDeleted: false,
      }).exec();
    },
  },

  Mutation: {
    // Создание новой манги (только админ)
    createManga: async (_: any, args: any, ctx: any) => {
      requireAdmin(ctx);
      const data = createMangaSchema.parse(args);
      return await Manga.create(data);
    },

    // Обновление манги (только админ)
    updateManga: async (_: any, args: any, ctx: any) => {
      requireAdmin(ctx);
      const { id, ...updateData } = args;
      return await Manga.findByIdAndUpdate(id, updateData, { new: true }).exec();
    },

    // Удаление манги (soft delete, только админ)
    deleteManga: async (_: any, { id }: { id: string }, ctx: any) => {
      requireAdmin(ctx);
      return await Manga.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
    },
  },

  // Пример безопасного подзапроса для поля 'reviews' на Manga
  Manga: {
    reviews: async (parent: any) => {
      // создаём новый Query каждый раз для подзапроса
      const Review = (await import('../../models/Review.js')).Review;
      return await Review.find({ mangaId: parent._id, isDeleted: false }).exec();
    },
  },
};

