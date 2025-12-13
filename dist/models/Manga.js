import { Schema, model } from 'mongoose';
const mangaSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    price: { type: Number, min: 0 },
    stock: Number,
    genres: [String],
    coverImage: String,
    rating: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
export const Manga = model('Manga', mangaSchema);
//# sourceMappingURL=Manga.js.map