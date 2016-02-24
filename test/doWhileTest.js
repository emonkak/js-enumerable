import doWhile from '../dist/doWhile'
import assert from 'assert'

describe('doWhile()', function() {
    it('should generates an enumerable sequence by repeating a source sequence as long as the given loop postcondition holds', function() {
        let x = 0
        const xs = {
            [Symbol.iterator]: function*() {
                yield x++
            }
        }
        assert.deepEqual(Array.from(xs::doWhile(() => x < 5)), [0, 1, 2, 3, 4])
        assert.deepEqual(Array.from(xs::doWhile(() => x < 5)), [5])
    })
})
