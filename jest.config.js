module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|node_modules)[/\\\\]'],
  testEnvironment: 'node',
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
}
