import where from '../dist/where'
import assert from 'assert'

describe('where()', function() {
    it('should filters a sequence of values based on a predicate', function() {
        assert.deepEqual(Array.from([1, 2, 3, 4]::where(x => x % 2 == 0)), [2, 4])
    })
})
