import '../test/specs-helper'
import axios from 'axios'

import Api from './api'

describe('api', function() {

  const mockBaseUrl = 'test-base-url'
  let api
  beforeEach(function() {
    api = new Api(mockBaseUrl)
    sinon.stub(axios, 'get').resolves(['user-1', 'user-2'])
  })

  afterEach(function() {
    axios.get.restore()
  })

  it('should have a default base url', function() {
    expect(new Api().baseUrl).to.be.a('string')
  })

  it('should be at version 2', function() {
    expect(Api.version).to.equal(2)
  })

  describe('#getUsers', function() {

    let result
    beforeEach(async function() {
      result = await api.getUsers()
    })

    it('should make an axios call', async done => {
      expect(axios.get.called).to.be.true
      done()
    })

    it('should call the correct api endpoint', function() {
      expect(axios.get.calledWith(mockBaseUrl + '/users')).to.be.true
    })

    it('should return the users', function() {
      expect(result[0]).to.equal('user-1')
      expect(result[1]).to.equal('user-2')
    })
  })
})
