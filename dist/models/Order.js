import { Schema, model, Types } from 'mongoose';
const orderSchema = new Schema({
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            mangaId: { type: Types.ObjectId, ref: 'Manga' },
            quantity: Number,
            priceAtPurchase: Number,
        },
    ],
    totalPrice: Number,
    status: {
        type: String,
        enum: ['PENDING', 'PAID', 'SHIPPED'],
        default: 'PENDING',
    },
}, { timestamps: true });
export const Order = model('Order', orderSchema);
//# sourceMappingURL=Order.js.map