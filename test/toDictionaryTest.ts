import * as assert from 'assert';
import Enumerable from '../src/';

describe('toDictionary()', () => {
    it('should creates a Map<T> from Iterable<T>', () => {
        const result1 = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toDictionary(x => x.length);
        assert(result1 instanceof Map);
        assert.deepEqual(Array.from(result1), [[1, 'i'], [2, 'gh'], [3, 'def']]);

        const result2 = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toDictionary(x => x, x => x.length);
        assert(result2 instanceof Map);
        assert.deepEqual(Array.from(result2), [['a', 1], ['bc', 2], ['def', 3], ['gh', 2], ['i', 1]]);
    });
});
