const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();

const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const scanDirectory = (path = './') =>
  new Promise(resolve => resolve(getDirectories(path)));

const isNodePackage = dir => {
  return dir.endsWith('\\node_modules');
};

module.exports = {
  scanDirectory,
  isNodePackage
};
