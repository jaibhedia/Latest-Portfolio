/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom', // Use jsdom for testing React components
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transpile TypeScript using ts-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // This file can be used for additional Jest setups like mocking
    testMatch: ['<rootDir>/src/**/*.test.(ts|tsx)'], // Match test files
  };
  