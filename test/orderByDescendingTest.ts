import * as assert from 'assert';
import Enumerable from '../src/';

describe('orderByDescending()', () => {
    it('should sorts the elements of a sequence in ascending order according to a key', () => {
        const xs = [3, 2, 4, 1];
        assert.deepEqual(new Enumerable(xs).orderByDescending().toArray(), [4, 3, 2, 1]);
        assert.deepEqual(new Enumerable(xs).orderByDescending(n => n % 2).thenByDescending(n => n).toArray(), [3, 1, 4, 2]);
        assert.deepEqual(new Enumerable(xs).orderByDescending(n => n % 2).thenBy(n => -n).toArray(), [3, 1, 4, 2]);
    });
});
