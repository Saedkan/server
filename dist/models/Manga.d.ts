import { Schema } from 'mongoose';
export declare const Manga: import("mongoose").Model<{
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
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
        title: string;
        genres: string[];
        rating: number;
        isDeleted: boolean;
        description?: string | null;
        stock?: number | null;
        coverImage?: string | null;
        price?: number | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        title: string;
        genres: string[];
        rating: number;
        isDeleted: boolean;
        description?: string | null;
        stock?: number | null;
        coverImage?: string | null;
        price?: number | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    genres: string[];
    rating: number;
    isDeleted: boolean;
    description?: string | null;
    stock?: number | null;
    coverImage?: string | null;
    price?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Manga.d.ts.map