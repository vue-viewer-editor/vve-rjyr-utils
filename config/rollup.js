var typescript = require('rollup-plugin-typescript2');
var babel = require('rollup-plugin-babel');
var pkg = require('../package.json');

// compatible with vve-rjyr-utils and @vue-viewer-editor/vve-rjyr-utils
// @vue-viewer-editor/vve-rjyr-utils -> vve-rjyr-utils
var name = pkg.name.split('/').pop();
// @vue-viewer-editor/vve-rjyr-utils -> vue-viewer-editor_vve-rjyr-utils
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner =
  `/*!
 * ${pkg.name} ${version} (https://github.com/vue-viewer-editor/vve-rjyr-utils)
 * API https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/doc/api.md
 * Copyright 2019-${(new Date).getFullYear()} vue-viewer-editor. All Rights Reserved
 * Licensed under MIT (https://github.com/vue-viewer-editor/vve-rjyr-utils/blob/master/LICENSE)
 */
`;

var type = pkg.srctype === 'ts' ? 'ts' : 'js';

function getCompiler(opt) {
  if (type === 'js') {
    return babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            'targets': {
              'browsers': 'last 2 versions, > 1%, ie >= 8, Android >= 4, iOS >= 6, and_uc > 9',
              'node': '0.10'
            },
            'modules': false,
            'loose': false
          }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            'helpers': false,
            'regenerator': false
          }
        ]
      ],
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    });
  }

  opt = opt || {
    tsconfigOverride: {
      compilerOptions: {
        module: 'ES2015'
      }
    }
  }

  return typescript(opt);
}

exports.type = type;
exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
