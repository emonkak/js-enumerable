import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('orderBy()', () => {
    it('should sorts the elements of a sequence in ascending order according to a key', () => {
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).orderBy().toArray(), [1, 2, 3, 4]);
        assert.deepEqual(new Enumerable([3, 2, 4, 1]).orderBy(n => n % 2).thenBy(n => n).toArray(), [2, 4, 1, 3]);
    });
});
