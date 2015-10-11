var babel = require('babel');

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
      '**/*.js': wallaby.compilers.babel({
        babel: babel
      })
    }
  }
}
