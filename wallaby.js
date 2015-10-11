var babel = require('babel')
var fs = require('fs')
var path = require('path')
var _ = require('lodash')

var babelrcPath = path.join(__dirname, '.babelrc')
var babelConfig = JSON.parse(fs.readFileSync(babelrcPath, 'utf8'))

if (!babelConfig.optional)
  babelConfig.optional = ['runtime']
else if (!_.includes(babelConfig.optional, 'runtime'))
  babelConfig.optional.push('runtime')

babelConfig.babel = babel

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.specs.js'
    ],
    tests: [
      'src/**/*.specs.js'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfig)
    }
  }
}
