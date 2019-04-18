#!/usr/bin/env node

const { scanDirectory } = require('./scanner');
const {
  filterForNodePackage,
  filterForDefinedPath,
  removeNodeModulesDirectory
} = require('./facilities');

const arg = `${process.cwd()}${process.argv[2] ? '\\' + process.argv[2] : ''}`;

scanDirectory(arg)
  .then(filterForDefinedPath)
  .then(filterForNodePackage)
  .then(filterForDefinedPath)
  .then(removeNodeModulesDirectory);
