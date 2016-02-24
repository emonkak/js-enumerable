import repeat from '../../dist/static/repeat'
import assert from 'assert'

describe('repeat()', function() {
    it('should generates a sequence by repeating the given value', function() {
        const iterator1 = repeat(123)[Symbol.iterator]()
        assert.deepEqual(iterator1.next(), { done: false, value: 123 })
        assert.deepEqual(iterator1.next(), { done: false, value: 123 })
        assert.deepEqual(iterator1.next(), { done: false, value: 123 })
        assert.deepEqual(iterator1.next(), { done: false, value: 123 })

        const iterator2 = repeat(123, 3)[Symbol.iterator]()
        assert.deepEqual(iterator2.next(), { done: false, value: 123 })
        assert.deepEqual(iterator2.next(), { done: false, value: 123 })
        assert.deepEqual(iterator2.next(), { done: false, value: 123 })
        assert.deepEqual(iterator2.next(), { done: true, value: undefined })
    })
})
