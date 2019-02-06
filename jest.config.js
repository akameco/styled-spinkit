module.exports = {
  // collectCoverageFrom: ['src/**/*.tsx?'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](dist|compiled|node_modules)[/\\\\]',
  ],
  testEnvironment: 'jsdom',
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
}
