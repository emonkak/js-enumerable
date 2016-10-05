import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('orderByDescending()', () => {
    it('should sorts the elements of a sequence in ascending order according to a key', () => {
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).orderByDescending().toArray(), [4, 3, 2, 1]);
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).orderByDescending(n => n % 2).thenByDescending(n => n).toArray(), [3, 1, 4, 2]);
    });
});
