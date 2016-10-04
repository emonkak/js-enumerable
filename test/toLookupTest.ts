import * as assert from 'assert';
import Enumerable from '../src';

describe('toLookup()', () => {
    it('should creates a generic Map<TKey, TElement> from an Iterable<T>', () => {
        assert.deepEqual(Array.from(new Enumerable([]).toLookup()), []);
        assert.deepEqual(Array.from(new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toLookup(x => x.length)), [[1, ['a', 'i']], [2, ['bc', 'gh']], [3, ['def']]]);
        assert.deepEqual(Array.from(new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toLookup(x => x.length, x => x + x)), [[1, ['aa', 'ii']], [2, ['bcbc', 'ghgh']], [3, ['defdef']]]);
    });
});
