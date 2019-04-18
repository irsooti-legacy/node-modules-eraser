#!/usr/bin/env node

const { scanDirectory } = require('./scanner');
const {
  filterForNodePackage,
  filterForDefinedPath,
  removeNodeModulesDirectory
} = require('./facilities');
const path = require('path');

const arg = process.cwd();

scanDirectory(arg)
  .then(filterForDefinedPath)
  .then(filterForNodePackage)
  .then(filterForDefinedPath)
  .then(removeNodeModulesDirectory);
