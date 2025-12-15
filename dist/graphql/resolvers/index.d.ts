export declare const resolvers: ({
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
} | {
    Query: {
        me: (_: any, __: any, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
        }) | null>;
    };
    Mutation: {
        register: (_: any, args: any) => Promise<{
            token: string;
            user: import("mongoose").Document<unknown, {}, {
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
            };
        }>;
        login: (_: any, args: any) => Promise<{
            token: string;
            user: (import("mongoose").Document<unknown, {}, {
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
            }) | null;
        }>;
        updateProfile: (_: any, { name }: {
            name: string;
            password?: string;
        }, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
        }) | null>;
    };
} | {
    Query: {
        getMangas: () => Promise<(import("mongoose").Document<unknown, {}, {
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
        })[]>;
        getMangaById: (_: any, { id }: {
            id: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
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
        }) | null>;
        searchManga: (_: any, { query }: {
            query: string;
        }) => Promise<(import("mongoose").Document<unknown, {}, {
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
        })[]>;
    };
    Mutation: {
        createManga: (_: any, args: any, ctx: any) => Promise<import("mongoose").Document<unknown, {}, {
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
        }>;
        updateManga: (_: any, args: any, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
        }) | null>;
        deleteManga: (_: any, { id }: {
            id: string;
        }, ctx: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
        }) | null>;
    };
    Manga: {
        reviews: (parent: any) => Promise<(import("mongoose").Document<unknown, {}, {
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[]>;
    };
} | {
    Query: {
        getReviewsByManga: (_: any, { mangaId }: any) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        })[], import("mongoose").Document<unknown, {}, {
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }, {}, {
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
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
        createReview: (_: any, args: any, ctx: any) => Promise<import("mongoose").Document<unknown, {}, {
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps, {
            id: string;
        }, {
            timestamps: true;
        }> & Omit<{
            mangaId: import("mongoose").Types.ObjectId;
            comment: string;
            userId: import("mongoose").Types.ObjectId;
            isDeleted: boolean;
            rating: number;
        } & import("mongoose").DefaultTimestampProps & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, "id"> & {
            id: string;
        }>;
    };
})[];
//# sourceMappingURL=index.d.ts.map