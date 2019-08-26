// rollup.config.js
// ES output
var common = require('./rollup.js');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/index.' + common.type,
    output: {
        file: prod ? 'dist/' + common.name + '.esm.min.js' : 'dist/' + common.name + '.esm.js',
        format: 'esm',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        banner: prod ? '' : common.banner,
    },
    plugins: [
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
        // https://github.com/mishoo/UglifyJS2#note
        // uglify-js only supports JavaScript (ECMAScript 5).
        // (prod && uglify.uglify())
    ]
};
