import average from '../dist/average'
import assert from 'assert'

describe('average()', function() {
    it('should computes the average of a sequence of numbers', function() {
        assert.strictEqual([0, 1, 2, 3, 4]::average(), 2)
        assert.strictEqual([0, 1, 2, 3, 4]::average(n => n * 2), 4)
    })

    it('should throws the exception if the sequence contains no elements', function() {
        assert.throws(() => []::average(), Error)
        assert.throws(() => []::average(n => n * 2), Error)
    })
})
