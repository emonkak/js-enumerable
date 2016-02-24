import buffer from '../dist/buffer'
import assert from 'assert'

describe('buffer()', function() {
    it('should generates a sequence of non-overlapping adjacent buffers over the source sequence', function() {
        const xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        assert.deepEqual(Array.from(xs::buffer(3)), [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]])
        assert.deepEqual(Array.from(xs::buffer(5)), [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]])
        assert.deepEqual(Array.from([]::buffer(5)), [])
        assert.deepEqual(Array.from(xs::buffer(3, 2)), [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 8], [8, 9]])
        assert.deepEqual(Array.from(xs::buffer(3, 4)), [[0, 1, 2], [4, 5, 6], [8, 9]])
    })

    it('should throws the exception if "count" or "skip" arguments is less than or equal to 0', function() {
        assert.throws(() => Array.from([]::buffer(0)), RangeError)
        assert.throws(() => Array.from([]::buffer(1, 0)), RangeError)
        assert.throws(() => Array.from([]::buffer(0, 1)), RangeError)
        assert.throws(() => Array.from([]::buffer(0, 0)), RangeError)
    })
})
