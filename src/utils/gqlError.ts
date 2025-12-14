import { GraphQLError } from 'graphql';

export const gqlError = (
  message: string,
  code: string,
  extra?: Record<string, any>
) => {
  throw new GraphQLError(message, {
    extensions: {
      code,
      ...extra,
    },
  });
};
