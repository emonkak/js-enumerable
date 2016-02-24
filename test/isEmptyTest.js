import isEmpty from '../dist/isEmpty'
import assert from 'assert'

describe('isEmpty()', function() {
    it('should determines whether an enumerable sequence is empty', function() {
        assert.strictEqual([]::isEmpty(), true)
        assert.strictEqual([1, 2, 3]::isEmpty(), false)
    })
})
