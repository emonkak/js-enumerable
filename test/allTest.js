import all from '../dist/all'
import assert from 'assert'

describe('all()', function() {
    it('should determines whether all elements of a sequence satisfy a condition', function() {
        assert.strictEqual([1, 2, 3, 4]::all(), true)
        assert.strictEqual([2, 4]::all(n => n % 2 === 0), true)
        assert.strictEqual([0, 1, 2, 3]::all(n => n % 2 === 0), false)
        assert.strictEqual([0, 1, 2, 3]::all(), false)
        assert.strictEqual([]::all(), true)
        assert.strictEqual([]::all(n => n % 2 === 0), true)
    })
})
