"use strict";
exports.__esModule = true;
var tslint_1 = require("tslint");
var fs_1 = require("fs");
var path = require("path");
var files = fs_1["default"].readdirSync('test');
var configFile = 'tslint.json';
var options = {
    fix: false,
    formatter: 'stylish'
};
var linter = new tslint_1.Linter(options);
files.forEach(function (fileName) {
    var filePath = path.join(__dirname, 'test', fileName);
    var fileContents = fs_1["default"].readFileSync(filePath, 'utf8');
    var config = tslint_1.Configuration.findConfiguration(configFile, fileName).results;
    linter.lint(filePath, fileContents, config);
});
var result = linter.getResult();
console.log(result.output);
