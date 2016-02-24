import first from '../dist/first'
import orderBy from '../dist/orderBy'
import skip from '../dist/skip'
import take from '../dist/take'
import assert from 'assert'

describe('first()', function() {
    it('should returns the first element of a sequence', function() {
        assert.strictEqual([1, 2, 3, 4]::first(), 1)
        assert.strictEqual([1, 2, 3, 4]::first(x => x % 2 === 0), 2)
    })

    it('should throws the exception if the sequence contains no elements', function() {
        assert.throws(() => []::first())
        assert.throws(() => [1, 2, 3, 4]::first(x => x > 10))
    })

    it('should works with orderBy()', function() {
        const xs = [3, 2, 4, 1]
        assert.strictEqual(xs::orderBy()::first(), 1)
        assert.strictEqual(xs::orderBy()::take(2)::first(), 1)
        assert.strictEqual(xs::orderBy()::skip(2)::first(), 3)
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::first(), 2)
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::first(), 3)
    })
})
