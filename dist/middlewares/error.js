import { GraphQLError } from 'graphql';
/**
 * Коды ошибок для GraphQL
 * Удобно использовать на фронте
 */
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ErrorCode["BAD_REQUEST"] = "BAD_REQUEST";
    ErrorCode["INTERNAL_ERROR"] = "INTERNAL_ERROR";
})(ErrorCode || (ErrorCode = {}));
/**
 * Кастомная GraphQL ошибка
 * Используется во всех резолверах
 */
export class AppError extends GraphQLError {
    constructor(message, code, statusCode = 400, details) {
        super(message, {
            extensions: {
                code,
                statusCode,
                details,
            },
        });
    }
}
/* ===========================
   Готовые фабрики ошибок
   =========================== */
export const UnauthorizedError = () => new AppError('Unauthorized', ErrorCode.UNAUTHORIZED, 401);
export const ForbiddenError = () => new AppError('Forbidden', ErrorCode.FORBIDDEN, 403);
export const NotFoundError = (entity = 'Resource') => new AppError(`${entity} not found`, ErrorCode.NOT_FOUND, 404);
export const ValidationError = (details) => new AppError('Validation error', ErrorCode.VALIDATION_ERROR, 422, details);
export const BadRequestError = (message = 'Bad request') => new AppError(message, ErrorCode.BAD_REQUEST, 400);
export const InternalServerError = () => new AppError('Internal server error', ErrorCode.INTERNAL_ERROR, 500);
//# sourceMappingURL=error.js.map