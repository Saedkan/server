import { Schema } from 'mongoose';
export declare const Manga: import("mongoose").Model<{
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        isDeleted: boolean;
        description: string;
        title: string;
        price: number;
        stock: number;
        genres: string[];
        coverImage: string;
        rating: number;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        isDeleted: boolean;
        description: string;
        title: string;
        price: number;
        stock: number;
        genres: string[];
        coverImage: string;
        rating: number;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    isDeleted: boolean;
    description: string;
    title: string;
    price: number;
    stock: number;
    genres: string[];
    coverImage: string;
    rating: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Manga.d.ts.map