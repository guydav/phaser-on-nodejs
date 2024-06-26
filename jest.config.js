module.exports = {
  collectCoverage: true,
  forceExit: true,
  maxConcurrency: 1,
  maxWorkers: 1,
  testTimeout: 10_000,
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.polyfills.js'],
}
