const path = require('path');
const minimist = require('minimist');

function resolve(dir) {
  console.log(__dirname);
  return path.join(__dirname, dir);
}

const runMode = require('minimist')(process.argv.slice(2));
let applicationPath;

switch(runMode.mode) {
  case 'development':
    applicationPath = '/';
    process.env.VUE_APP_APIURL = 'http://homol.api.link/';
    console.log('\x1b[33m', '##### GERANDO BUILD PARA DEV / HOMOL #####');
    break;
  case 'production':
    applicationPath = '/';
    process.env.VUE_APP_APIURL = 'https://prod.api.link/';
    console.log('\x1b[33m', '##### GERANDO BUILD PARA PRODUÇÃO #####');
    break;
}

module.exports = {
  baseUrl: applicationPath,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve(__dirname, './src/assets/scss'),
        nodemodules: path.resolve(__dirname, './node_modules'),
      }
    },
  },
};
