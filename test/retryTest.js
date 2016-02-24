import retry from '../dist/retry'
import assert from 'assert'

describe('retry()', function() {
    it('should creates a sequence that retries enumerating the source sequence as long as an error occurs.', function() {
        assert.deepEqual(Array.from([1, 2, 3]::retry()), [1, 2, 3])
        assert.deepEqual(Array.from([1, 2, 3]::retry(2)), [1, 2, 3])

        const xs = {
            [Symbol.iterator]: function*() {
                yield 1
                yield 2
                yield 3
                throw new Error()
            }
        }
        const iterator = xs::retry(2)[Symbol.iterator]()
        assert.deepEqual(iterator.next(), { done: false, value: 1 })
        assert.deepEqual(iterator.next(), { done: false, value: 2 })
        assert.deepEqual(iterator.next(), { done: false, value: 3 })
        assert.deepEqual(iterator.next(), { done: false, value: 1 })
        assert.deepEqual(iterator.next(), { done: false, value: 2 })
        assert.deepEqual(iterator.next(), { done: false, value: 3 })
        assert.throws(() => iterator.next())
    })
})

