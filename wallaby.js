var babelConfig = require('./test/wallaby-babel-config')

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.specs.js',
      'test/specs-helper.js'
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
