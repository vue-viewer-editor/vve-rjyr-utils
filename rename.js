var path = require('path');
var { camelCase } = require('lodash')
var cdkit = require('cdkit');

var fromLibName = 'nq-tslib-base';
var toLibName = 'vve-rjyr-utils';

var formAuthorName = 'nqdy666';
var toAuthorName = 'vue-viewer-editor';


function getFullPath(filename) {
  return path.join(__dirname, filename)
}

var map = [
  getFullPath('package.json'),
  getFullPath('README.md'),
  getFullPath('README.en.md'),
  getFullPath('config/rollup.js'),
  getFullPath('test/browser/index.html'),
  getFullPath('demo/demo-global.html'),
  getFullPath('demo/demo-node.html'),
  getFullPath('demo/demo-amd.html'),
];

const config = [{
  root: '.',
  rules: [{
    test: function (pathname) {
      return map.some(function (u) {
        return pathname.indexOf(u) > -1;
      });
    },
    replace: [{
        from: fromLibName,
        to: toLibName,
      },
      {
        from: camelCase(fromLibName),
        to: camelCase(toLibName),
      },
      {
        from: formAuthorName,
        to: toAuthorName,
      },
    ]
  }]
}, ];

cdkit.run('replace', config);
