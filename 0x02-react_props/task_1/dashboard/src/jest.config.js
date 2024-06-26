module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
};
