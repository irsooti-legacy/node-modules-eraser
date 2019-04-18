const rimRaf = require('rimraf');
const { scanDirectory, isNodePackage } = require('./scanner');

const removeNodeModulesDirectory = sources => {
  let counter = 0;
  return new Promise(resolve => {
    sources.map(source =>
      rimRaf(source, err => {
        if (!err) {
          counter = counter + 1;
          console.log(`#${counter} Node modules: ${source}: deleted`);
        } else {
          console.log('error: ' + err);
        }
      })
    );

    resolve(counter);
  });
};

const filterForDefinedPath = dirs => dirs.filter(f => f !== undefined);

const filterForNodePackage = dirs => {
  const subdirectoryList = [];
  return new Promise(resolve =>
    dirs.map(dir => {
      scanDirectory(dir).then(subDirectories => {
        subdirectoryList.push(subDirectories.filter(isNodePackage)[0]);
      });

      resolve(subdirectoryList);
    })
  );
};

module.exports = {
  removeNodeModulesDirectory,
  filterForDefinedPath,
  filterForNodePackage
};
