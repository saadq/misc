const { CLIEngine } = require('eslint')

const cli = new CLIEngine({
  parserOptions: {
    ecmaVersion: 8
  },
  useEslintrc: false,
  ignorePath: '.linterignore',
  rules: {
    'prefer-const': 2
  }
})

const report = cli.executeOnFiles(['test.js'])
const formatter = cli.getFormatter('stylish')

console.log(formatter(report.results))
