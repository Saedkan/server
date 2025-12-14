export declare const mangaResolver: {
    Query: {
        getMangas: () => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
        })[], import("mongoose").Document<unknown, {}, {
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
        }, {}, {
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
        }, "find", {
            id: string;
        }>;
        getMangaById: (_: any, { id }: any) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
        }) | null, import("mongoose").Document<unknown, {}, {
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
        }, {}, {
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
        }, "findOne", {
            id: string;
        }>;
        searchManga: (_: any, { query }: any) => import("mongoose").Query<(import("mongoose").Document<unknown, {}, {
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
        })[], import("mongoose").Document<unknown, {}, {
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
        }, {}, {
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
        }, "find", {
            id: string;
        }>;
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
    };
};
//# sourceMappingURL=manga.resolver.d.ts.map