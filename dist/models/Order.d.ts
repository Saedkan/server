import { Schema, Types } from 'mongoose';
export declare const Order: import("mongoose").Model<{
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }, Types.Subdocument<import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }> & {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    }>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
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
        userId: Types.ObjectId;
        items: Types.DocumentArray<{
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }, Types.Subdocument<import("bson").ObjectId, unknown, {
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }> & {
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }>;
        status: "PENDING" | "PAID" | "SHIPPED";
        totalPrice?: number | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        userId: Types.ObjectId;
        items: Types.DocumentArray<{
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }, Types.Subdocument<import("bson").ObjectId, unknown, {
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }> & {
            quantity?: number | null;
            priceAtPurchase?: number | null;
            mangaId?: Types.ObjectId | null;
        }>;
        status: "PENDING" | "PAID" | "SHIPPED";
        totalPrice?: number | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    }, Types.Subdocument<string | import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    }> & ({
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    })>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId;
    items: Types.DocumentArray<{
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    }, Types.Subdocument<string | import("bson").ObjectId, unknown, {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    }> & ({
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: Types.ObjectId | null;
    } | {
        quantity?: number | null;
        priceAtPurchase?: number | null;
        mangaId?: string | null;
        _id: string;
    })>;
    status: "PENDING" | "PAID" | "SHIPPED";
    totalPrice?: number | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Order.d.ts.map