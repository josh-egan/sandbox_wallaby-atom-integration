import _ from 'lodash'
import chai from 'chai'
import sinon from 'sinon'
require('sinon-as-promised')

_.assign(global, {
  expect: chai.expect,
  sinon: sinon
})

export default {
  noop() {}
}
