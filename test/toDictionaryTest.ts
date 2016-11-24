import * as assert from 'assert';
import Enumerable from '../src/';

describe('toDictionary()', () => {
    it('should creates a Map<T> from Iterable<T>', () => {
        let result = new Enumerable([]).toDictionary();
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), []);

        result = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toDictionary(x => x.length);
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), [[1, 'i'], [2, 'gh'], [3, 'def']]);

        result = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toDictionary(x => x, x => x.length);
        assert(result instanceof Map);
        assert.deepEqual(Array.from(result), [['a', 1], ['bc', 2], ['def', 3], ['gh', 2], ['i', 1]]);
    });
});
