module.exports = {
  collectCoverage: true,
  forceExit: true,
  maxConcurrency: 1,
  maxWorkers: 1,
  testTimeout: 10_000,
  testEnvironment: 'jsdom',
  // Adding lib/index.js here so it doesn't get preprocessed and transformed
  setupFiles: ['./jest.setup.js', '<rootDir>/lib/index.js'],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/lib/index.js"],
  // To get it to load the CJS, rathre than ES module:
  moduleNameMapper: {
    "@asamuzakjp/css-color": "<rootDir>/node_modules/@asamuzakjp/css-color/dist/cjs/index.cjs"
  }
}
