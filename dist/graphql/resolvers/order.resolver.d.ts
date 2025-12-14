export declare const orderResolver: {
    Query: {
        getMyOrders: (_: any, __: any, ctx: any) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[], import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            } | {
                mangaId: string;
                quantity: number;
                priceAtPurchase: number;
                _id: string;
            }, import("mongoose").Types.Subdocument<string | import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            } | {
                mangaId: string;
                quantity: number;
                priceAtPurchase: number;
                _id: string;
            }> & ({
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            } | {
                mangaId: string;
                quantity: number;
                priceAtPurchase: number;
                _id: string;
            })>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
            createdAt: NativeDate;
            updatedAt: NativeDate;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "find", {
            id: string;
        }>;
    };
    Mutation: {
        createOrder: (_: any, __: any, ctx: any) => Promise<import("mongoose").Document<unknown, {}, {
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            userId: import("mongoose").Types.ObjectId;
            items: import("mongoose").Types.DocumentArray<{
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }> & {
                mangaId: import("mongoose").Types.ObjectId;
                quantity: number;
                priceAtPurchase: number;
            }>;
            totalPrice: number;
            status: "PENDING" | "PAID" | "SHIPPED";
            isDeleted: boolean;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }>;
    };
    Subscription: {
        orderStatusUpdated: {
            subscribe: () => AsyncIterator<any, any, any>;
        };
    };
};
//# sourceMappingURL=order.resolver.d.ts.map