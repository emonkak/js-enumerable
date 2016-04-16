import assert from 'assert';
import toLookup from '../dist/toLookup';

describe('toLookup()', function() {
    it('should creates a generic Map<TKey, TElement> from an Iterable<T>', function() {
        let result = []::toLookup();
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), []);

        result = ['a', 'bc', 'def', 'gh', 'i']::toLookup(x => x.length);
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), [[1, ['a', 'i']], [2, ['bc', 'gh']], [3, ['def']]]);

        result = ['a', 'bc', 'def', 'gh', 'i']::toLookup(x => x.length, x => x + x);
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), [[1, ['aa', 'ii']], [2, ['bcbc', 'ghgh']], [3, ['defdef']]]);
    });
});
