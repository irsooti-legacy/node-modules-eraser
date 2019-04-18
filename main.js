const { scanDirectory } = require('./scanner');
const {
  filterForNodePackage,
  filterForDefinedPath,
  removeNodeModulesDirectory
} = require('./facilities');
const path = require('path');

const arg =
  process.argv.length >= 1
    ? path.resolve(__dirname, process.argv[1])
    : process.cwd();

scanDirectory(arg)
  .then(filterForDefinedPath)
  .then(filterForNodePackage)
  .then(filterForDefinedPath)
  .then(removeNodeModulesDirectory);
