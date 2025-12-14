import { z } from 'zod';

export const createMangaSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  price: z.number().min(0),
  stock: z.number().min(0),
  genres: z.array(z.string()).min(1),
  coverImage: z.string().url(),
});
