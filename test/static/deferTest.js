import defer from '../../dist/static/defer'
import assert from 'assert'

describe('defer()', function() {
    it('should creates an enumerable sequence based on an enumerable factory function', function() {
        let n = 5

        const xs = {
            [Symbol.iterator]: function*() {
                while (n > 0) {
                    yield n--
                }
            }
        }

        assert.deepEqual(Array.from(xs), [5, 4, 3, 2, 1])
        assert.deepEqual(Array.from(xs), [])
    })
})

