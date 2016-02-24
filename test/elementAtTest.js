import elementAt from '../dist/elementAt'
import orderBy from '../dist/orderBy'
import skip from '../dist/skip'
import take from '../dist/take'
import assert from 'assert'

describe('elementAt()', function() {
    it('should returns the element at a specified index in a sequence', function() {
        const xs = [1, 2, 3, 4]

        assert.strictEqual(xs::elementAt(0), 1)
        assert.strictEqual(xs::elementAt(1), 2)
        assert.strictEqual(xs::elementAt(2), 3)
        assert.strictEqual(xs::elementAt(3), 4)
    })

    it('should throws the exception if index is out of range', function() {
        const xs = [1, 2, 3, 4]

        assert.throws(() => xs::elementAt(4))
    })

    it('should works with orderBy()', function() {
        const xs = [3, 2, 4, 1]

        assert.strictEqual(xs::orderBy()::elementAt(0), 1)
        assert.strictEqual(xs::orderBy()::elementAt(1), 2)
        assert.strictEqual(xs::orderBy()::elementAt(2), 3)
        assert.strictEqual(xs::orderBy()::elementAt(3), 4)
        assert.strictEqual(xs::orderBy()::take(2)::elementAt(0), 1)
        assert.strictEqual(xs::orderBy()::take(2)::elementAt(1), 2)
        assert.strictEqual(xs::orderBy()::skip(2)::elementAt(0), 3)
        assert.strictEqual(xs::orderBy()::skip(2)::elementAt(1), 4)
        assert.strictEqual(xs::orderBy()::take(2)::skip(1)::elementAt(0), 2)
        assert.strictEqual(xs::orderBy()::skip(2)::take(1)::elementAt(0), 3)

        assert.throws(() => xs::orderBy()::elementAt(4))
        assert.throws(() => xs::orderBy()::take(2)::elementAt(3))
        assert.throws(() => xs::orderBy()::take(2)::skip(1)::elementAt(1))
        assert.throws(() => xs::orderBy()::skip(2)::take(1)::elementAt(1))
    })
})
