import { Linter, Configuration } from 'tslint'
import fs from 'fs'
import path from 'path'

const files = fs.readdirSync('test')
const configFile = 'tslint.json'

const options = {
  fix: false,
  formatter: 'stylish'
}

const linter = new Linter(options)

files.forEach(fileName => {
  const filePath = path.join(__dirname, 'test', fileName)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const config = Configuration.findConfiguration(configFile, fileName).results
  linter.lint(filePath, fileContents, config)
})

const result = linter.getResult()
console.log(result.output)
