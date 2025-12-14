import { GraphQLError } from 'graphql';
export const gqlError = (message, code, extra) => {
    throw new GraphQLError(message, {
        extensions: {
            code,
            ...extra,
        },
    });
};
//# sourceMappingURL=gqlError.js.map