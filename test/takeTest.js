import orderBy from '../dist/orderBy'
import skip from '../dist/skip'
import take from '../dist/take'
import assert from 'assert'

describe('take()', function() {
    it('should return a specified number of contiguous elements from the start of a sequence', function() {
        assert.deepEqual(Array.from([1, 2, 3, 4]::take(2)), [1, 2])
        assert.deepEqual(Array.from([1, 2, 3, 4]::take(0)), [])
    })

    it('should works with orderBy()', function() {
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy()::take(2)), [1, 2])
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderBy()::skip(2)), [3, 4])
    })
})
