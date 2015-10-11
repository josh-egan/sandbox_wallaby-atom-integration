import chai from 'chai'
import strings from './strings'

const expect = chai.expect

describe('strings', function() {
  describe('#startsWith', function() {
    it('should return false if str is undefined', function() {
      expect(strings.startsWith(undefined, 'a')).to.be.false
    })

    it('should return false if pattern is undefined', function() {
      expect(strings.startsWith('abc', undefined)).to.be.false
    })

    it('should return false if pattern is an empty string', function() {
      expect(strings.startsWith('abc', '')).to.be.false
    })

    it('should return false if str does not start with pattern', function() {
      expect(strings.startsWith('abc', 'z')).to.be.false
    })

    it('should return false if pattern is longer than str', function() {
      expect(strings.startsWith('abc', 'abcd')).to.be.false
    })
    
    const validStartsWithCases = [
      {str: 'abc', pattern: 'a'},
      {str: 'abc', pattern: 'ab'},
      {str: 'abc', pattern: 'abc'}
    ]
    validStartsWithCases.forEach(test => {
      it('should return true for string \'' + test.str + '\' and pattern \'' + test.pattern + '\'', function() {
        expect(strings.startsWith(test.str, test.pattern)).to.be.true
      })
    })
  })
})
