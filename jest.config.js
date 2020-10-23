const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  'transform': {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/*/tests/**/*.test.js?(x)', '**/*/test/**/*.test.js?(x)',
    '**/*/tests/**/*.test.ts', '**/*/test/**/*.test.ts'
  ],
}

module.exports = jestConfig