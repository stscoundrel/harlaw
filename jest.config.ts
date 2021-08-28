module.exports = {
  collectCoverageFrom: [
    'src/**',
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
