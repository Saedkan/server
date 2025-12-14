export declare const userResolver: {
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
    };
};
//# sourceMappingURL=user.resolver.d.ts.map