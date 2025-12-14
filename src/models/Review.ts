import { Schema, model, Types } from 'mongoose';

const reviewSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    mangaId: {
      type: Types.ObjectId,
      ref: 'Manga',
      required: true,
      index: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 500,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  { timestamps: true }
);

reviewSchema.index({ userId: 1, mangaId: 1 }, { unique: true });

export const Review = model('Review', reviewSchema);
