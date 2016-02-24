import orderBy from '../dist/orderBy'
import assert from 'assert'

describe('orderBy()', function() {
    it('should sorts the elements of a sequence in ascending order according to a key', function() {
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy()), [1, 2, 3, 4])
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy(n => n % 2).thenBy(n => n)), [2, 4, 1, 3])
    })
})
