import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { env } from './config/env.js';
import { User } from './models/User.js';
import { Manga } from './models/Manga.js';
import { Order } from './models/Order.js';
import { Review } from './models/Review.js';
const run = async () => {
    await mongoose.connect(env.MONGO_URI);
    console.log('Mongo connected for seeding');
    // --- Очистка ---
    await User.deleteMany({});
    await Manga.deleteMany({});
    await Order.deleteMany({});
    await Review.deleteMany({});
    // --- Админ ---
    const admin = await User.create({
        email: 'admin@anime.com',
        passwordHash: await bcrypt.hash('admin123', 10),
        name: 'Admin',
        role: 'ADMIN',
    });
    // --- Тестовые пользователи ---
    const user1 = await User.create({
        email: 'user1@anime.com',
        passwordHash: await bcrypt.hash('123456', 10),
        name: 'User One',
    });
    const user2 = await User.create({
        email: 'user2@anime.com',
        passwordHash: await bcrypt.hash('123456', 10),
        name: 'User Two',
    });
    // --- Манга ---
    const mangas = await Manga.insertMany([
        {
            title: 'Naruto',
            description: 'Shinobi manga',
            price: 10,
            stock: 50,
            genres: ['Action', 'Adventure'],
            coverImage: 'https://example.com/naruto.jpg',
        },
        {
            title: 'One Piece',
            description: 'Pirates adventure',
            price: 12,
            stock: 30,
            genres: ['Adventure', 'Comedy'],
            coverImage: 'https://example.com/onepiece.jpg',
        },
        {
            title: 'Bleach',
            description: 'Soul reapers story',
            price: 8,
            stock: 40,
            genres: ['Action', 'Supernatural'],
            coverImage: 'https://example.com/bleach.jpg',
        },
    ]);
    // --- Заказ ---
    if (mangas[0] && mangas[1]) {
        const order = await Order.create({
            userId: user1._id,
            items: [
                { mangaId: mangas[0]._id, quantity: 2, priceAtPurchase: mangas[0].price },
                { mangaId: mangas[1]._id, quantity: 1, priceAtPurchase: mangas[1].price },
            ],
            totalPrice: mangas[0].price * 2 + mangas[1].price,
            status: 'PENDING',
        });
        // --- Ревью ---
        await Review.create({
            userId: user1._id,
            mangaId: mangas[0]._id,
            rating: 5,
            comment: 'Amazing!',
        });
        await Review.create({
            userId: user2._id,
            mangaId: mangas[1]._id,
            rating: 4,
            comment: 'Really good!',
        });
    }
    else {
        console.warn('Not enough manga documents to create orders and reviews.');
    }
    console.log('Seeding completed');
    process.exit(0);
};
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map