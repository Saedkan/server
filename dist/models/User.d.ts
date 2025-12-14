import { Schema } from 'mongoose';
export declare const User: import("mongoose").Model<{
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
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
        name: string;
        isDeleted: boolean;
        email: string;
        passwordHash: string;
        role: "USER" | "ADMIN";
        isBlocked: boolean;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        name: string;
        isDeleted: boolean;
        email: string;
        passwordHash: string;
        role: "USER" | "ADMIN";
        isBlocked: boolean;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    isDeleted: boolean;
    email: string;
    passwordHash: string;
    role: "USER" | "ADMIN";
    isBlocked: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=User.d.ts.map