import * as assert from 'assert';
import Enumerable from './Enumerable';

describe('toObject()', () => {
    it('should creates a Object from Iterable<T>', () => {
        const result1 = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toObject(x => x.length + '');
        assert.deepEqual(result1, { 1: 'i', 2: 'gh', 3: 'def'});

        const result2 = new Enumerable(['a', 'bc', 'def', 'gh', 'i']).toObject(x => x, x => x.length);
        assert.deepEqual(result2, { 'a': 1, 'bc': 2, 'def': 3, 'gh': 2, 'i': 1 });
    });
});

