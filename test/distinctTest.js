import distinct from '../dist/distinct'
import assert from 'assert'

describe('distinct()', function() {
    it('should returns distinct elements from a sequence', function() {
        assert.deepEqual(Array.from([1, 2, 1, 2]::distinct()), [1, 2])
        assert.deepEqual(Array.from([1, 1, 2, 2]::distinct()), [1, 2])
        assert.deepEqual(Array.from([1, 2, 3, 4]::distinct(x => x % 2 === 0)), [1, 2])
        assert.deepEqual(Array.from([1, 3, 2, 4]::distinct(x => x % 2 === 0)), [1, 2])
    })
})
