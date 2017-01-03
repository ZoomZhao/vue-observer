const path = require('path')
const flow = require('rollup-plugin-flow-no-whitespace')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const alias = require('rollup-plugin-alias')
const version = process.env.VERSION || require('../package.json').version

const banner =
  '/*!\n' +
  ' * vue-observer.js v' + version + '\n' +
  ' * From Vue.js (c) 2014-' + new Date().getFullYear() + ' Evan You\n' +
  ' * Released under the MIT License.\n' +
  ' */'

function genConfig (opts) {
  const config = {
    entry: opts.entry,
    dest: opts.dest,
    external: opts.external,
    format: opts.format,
    banner: opts.banner,
    moduleName: 'VueModel',
    plugins: [
      flow(),
      buble(),
      alias(Object.assign({}, {
        shared: path.resolve(__dirname, '../src/shared')
      }, opts.alias))
    ]
  }

  if (opts.env) {
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}

module.exports = genConfig({
  entry: path.resolve(__dirname, '../src/index.js'),
  dest: path.resolve(__dirname, '../dist/vue-observer.js'),
  format: 'umd',
  env: 'development',
  alias: { he: './entity-decoder' },
  banner
})
