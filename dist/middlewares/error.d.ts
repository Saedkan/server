import { GraphQLError } from 'graphql';
/**
 * Коды ошибок для GraphQL
 * Удобно использовать на фронте
 */
export declare enum ErrorCode {
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    NOT_FOUND = "NOT_FOUND",
    VALIDATION_ERROR = "VALIDATION_ERROR",
    BAD_REQUEST = "BAD_REQUEST",
    INTERNAL_ERROR = "INTERNAL_ERROR"
}
/**
 * Кастомная GraphQL ошибка
 * Используется во всех резолверах
 */
export declare class AppError extends GraphQLError {
    constructor(message: string, code: ErrorCode, statusCode?: number, details?: Record<string, any>);
}
export declare const UnauthorizedError: () => AppError;
export declare const ForbiddenError: () => AppError;
export declare const NotFoundError: (entity?: string) => AppError;
export declare const ValidationError: (details?: any) => AppError;
export declare const BadRequestError: (message?: string) => AppError;
export declare const InternalServerError: () => AppError;
//# sourceMappingURL=error.d.ts.map