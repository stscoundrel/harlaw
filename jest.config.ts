module.exports = {
  collectCoverageFrom: [
    'src/**',
    '!src/types',
  ],
  testEnvironment: 'node',
  verbose: false,
  setupFiles: [
    '<rootDir>/setupTests.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
};
