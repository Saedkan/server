const config = {
    // Используем ts-jest для TypeScript
    preset: 'ts-jest',
    // Среда выполнения — Node.js (не jsdom)
    testEnvironment: 'node',
    // Где искать тесты
    testMatch: [
        '**/__tests__/**/*.test.ts',
        '**/?(*.)+(spec|test).ts',
    ],
    // Корень проекта
    rootDir: '.',
    // Поддержка алиасов путей (если используешь tsconfig paths)
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    // Файлы, которые выполняются ДО тестов
    setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
    // Покрытие кода
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.ts',
        '!src/seed.ts',
    ],
    coverageDirectory: 'coverage',
    // Более чистый вывод
    verbose: true,
    // Таймауты (важно для MongoDB memory server)
    testTimeout: 30000,
    // Очистка моков
    clearMocks: true,
    restoreMocks: true,
};
export default config;
//# sourceMappingURL=jest.config.js.map