import * as assert from 'assert';
import Enumerable from '../src/';

describe('except()', () => {
    it('should produces the set difference of two sequences', () => {
        assert.deepEqual(new Enumerable([]).except([]).toArray(), []);
        assert.deepEqual(new Enumerable([1, 2, 3, 4, 5, 6]).except([2, 3, 4]).toArray(), [1, 5, 6]);
        assert.deepEqual(new Enumerable([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]).except([2, 3, 4]).toArray(), [1, 5, 6]);
        assert.deepEqual(new Enumerable([2, 3, 4]).except([1, 2, 3, 4, 5, 6]).toArray(), []);
    });
});
