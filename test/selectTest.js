import select from '../dist/select'
import assert from 'assert'

describe('select()', function() {
    it('should projects each element of a sequence', function() {
        assert.deepEqual(Array.from([1, 2, 3, 4]::select(x => x * 2)), [2, 4, 6, 8])
    })
})
