import { Configuration, Linter } from "tslint";

const configFile = "tslint.json";

const options = {
  fix: false,
  formatter: "stylish",
};

const program = Linter.createProgram("tsconfig.json", ".");
const linter = new Linter(options, program);
const files = Linter.getFileNames(program);

files.forEach((file) => {
  const fileContents = program.getSourceFile(file)!.getFullText();
  const config = Configuration.findConfiguration(configFile, file).results;
  linter.lint(file, fileContents, config);
});

const results = linter.getResult();
process.stdout.write(results.output);
process.exit(1);
