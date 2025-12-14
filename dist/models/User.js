import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email'],
        index: true,
    },
    passwordHash: {
        type: String,
        required: true,
        minlength: 60, // bcrypt hash
    },
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
        index: true,
    },
}, { timestamps: true });
export const User = model('User', userSchema);
//# sourceMappingURL=User.js.map