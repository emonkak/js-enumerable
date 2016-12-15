import * as assert from 'assert';
import Enumerable from './bundle';

describe('skip()', () => {
    it('should bypasses a specified number of elements in a sequence and then returns the remaining elements', () => {
        assert.deepEqual(new Enumerable([]).skip(1).toArray(), []);
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4]).skip(0).toArray(), [0, 1, 2, 3, 4]);
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4]).skip(3).toArray(), [3, 4]);
        assert.deepEqual(new Enumerable([0, 1, 2, 3, 4][Symbol.iterator]()).skip(3).toArray(), [3, 4]);
    });
});
