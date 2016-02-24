import _return from '../../dist/static/return'
import assert from 'assert'

describe('return()', function() {
    it('should returns a sequence with a single element.', function() {
        assert.deepEqual(Array.from(_return(123)), [123])
    })
})
