import { Schema, Types } from 'mongoose';
export declare const Review: import("mongoose").Model<{
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        mangaId: Types.ObjectId;
        comment: string;
        userId: Types.ObjectId;
        isDeleted: boolean;
        rating: number;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        mangaId: Types.ObjectId;
        comment: string;
        userId: Types.ObjectId;
        isDeleted: boolean;
        rating: number;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    mangaId: Types.ObjectId;
    comment: string;
    userId: Types.ObjectId;
    isDeleted: boolean;
    rating: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Review.d.ts.map