export declare const reviewResolver: {
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
};
//# sourceMappingURL=review.resolver.d.ts.map