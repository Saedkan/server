export declare const mangaResolver: {
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
};
//# sourceMappingURL=manga.resolver.d.ts.map