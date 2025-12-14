import { z } from 'zod';
export declare const createMangaSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    price: z.ZodNumber;
    stock: z.ZodNumber;
    genres: z.ZodArray<z.ZodString>;
    coverImage: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=manga.schema.d.ts.map