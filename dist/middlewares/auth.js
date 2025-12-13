export const authGuard = (context) => {
    if (!context.user)
        throw new Error('UNAUTHORIZED');
};
export const adminGuard = (context) => {
    authGuard(context);
    if (context.user.role !== 'ADMIN') {
        throw new Error('FORBIDDEN');
    }
};
//# sourceMappingURL=auth.js.map