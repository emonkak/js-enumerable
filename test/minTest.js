import min from '../dist/min'
import assert from 'assert'

describe('min()', function() {
    it('should returns the minimum value in a sequence of values', function() {
        assert.strictEqual([]::min(), Infinity)
        assert.strictEqual([1, 2, 3, 2, 1]::min(), 1)
        assert.strictEqual(['a', 'ab', 'abc', 'ab', 'a']::min(s => s.length), 1)
    })
})
