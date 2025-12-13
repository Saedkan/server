export declare const resolvers: {
    Query: {
        getMyOrders: (_: any, __: any, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }> & {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }>;
            status: "PENDING" | "PAID" | "SHIPPED";
            totalPrice?: number | null;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }> & {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }>;
            status: "PENDING" | "PAID" | "SHIPPED";
            totalPrice?: number | null;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[]>;
    };
    Mutation: {
        updateOrderStatus: (_: any, { orderId, status }: any, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }> & {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }>;
            status: "PENDING" | "PAID" | "SHIPPED";
            totalPrice?: number | null;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }> & {
                quantity?: number | null;
                priceAtPurchase?: number | null;
                mangaId?: import("mongoose").Types.ObjectId | null;
            }>;
            status: "PENDING" | "PAID" | "SHIPPED";
            totalPrice?: number | null;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }) | null>;
    };
    Subscription: {
        orderStatusUpdated: {
            subscribe: () => AsyncIterator<any, any, any>;
        };
    };
}[];
//# sourceMappingURL=index.d.ts.map