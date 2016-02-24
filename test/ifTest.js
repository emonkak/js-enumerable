import _if from '../dist/if'
import assert from 'assert'

describe('if()', function() {
    it('should returns an enumerable sequence based on the evaluation result of the given condition', function() {
        assert.deepEqual(Array.from(_if(() => true, [1, 2, 3], [4, 5, 6])), [1, 2, 3])
        assert.deepEqual(Array.from(_if(() => false, [1, 2, 3], [4, 5, 6])), [4, 5, 6])
    })
})
