import { Linter, Configuration } from 'tslint'
import fs from 'fs'

const fileName = 'file-to-lint.ts'
const configFile = 'tslint.json'

const options = {
  fix: false,
  formatter: 'stylish'
}

const fileContents = fs.readFileSync(fileName, 'utf8')
const linter = new Linter(options)
const config = Configuration.findConfiguration(configFile, fileName).results

linter.lint(fileName, fileContents, config)
const result = linter.getResult()

console.log(result.output)
