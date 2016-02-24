import single from '../dist/single'
import assert from 'assert'

describe('single()', function() {
    it('should returns the only element of a sequence', function() {
        assert.strictEqual([1]::single(), 1)
        assert.strictEqual([1, 2]::single(x => x % 2 === 0), 2)
    })

    it('should throws an exception if there is not exactly one element in the sequence', function() {
        assert.throws(() => []::single())
        assert.throws(() => [1, 2]::single())
        assert.throws(() => [1, 2, 3, 4]::single(x => x > 0))
        assert.throws(() => [1, 2, 3, 4]::single(x => x > 10))
    })
})
