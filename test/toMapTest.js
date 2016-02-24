import toMap from '../dist/toMap'
import assert from 'assert'

describe('toMap()', function() {
    it('should creates a Map<T> from Iterable<T>', function() {
        let result = []::toMap()
        assert(result instanceof Map)
        assert.deepEqual(Array.from(result), [])

        result = ['a', 'bc', 'def', 'gh', 'i']::toMap(x => x.length)
        assert(result instanceof Map)
        assert.deepEqual(Array.from(result), [[1, 'i'], [2, 'gh'], [3, 'def']])

        result = ['a', 'bc', 'def', 'gh', 'i']::toMap(x => x, x => x.length)
        assert(result instanceof Map)
        assert.deepEqual(Array.from(result), [['a', 1], ['bc', 2], ['def', 3], ['gh', 2], ['i', 1]])
    })
})
