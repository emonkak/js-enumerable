import zip from '../../dist/static/zip'
import assert from 'assert'

describe('zip()', function() {
    it('should applies a specified function to the corresponding elements of two sequences', function() {
        assert.deepEqual(Array.from(zip([1, 3, 5, 7], [2, 4, 6, 8], (x, y) => [x, y])), [[1, 2], [3, 4], [5, 6], [7, 8]])
        assert.deepEqual(Array.from(zip([1, 3, 5, 7, 9], [2, 4, 6, 8], (x, y) => [x, y])), [[1, 2], [3, 4], [5, 6], [7, 8]])
        assert.deepEqual(Array.from(zip([1, 3, 5, 7], [2, 4, 6, 8, 10], (x, y) => [x, y])), [[1, 2], [3, 4], [5, 6], [7, 8]])
        assert.deepEqual(Array.from(zip([], [], (x, y) => [x, y])), [])
    })
})
