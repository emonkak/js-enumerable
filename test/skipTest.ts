import * as assert from 'assert';
import skip from '../src/skip';

describe('skip()', () => {
    it('should bypasses a specified number of elements in a sequence and then returns the remaining elements', () => {
        assert.deepEqual(Array.from(skip.call([], 1)), []);
        assert.deepEqual(Array.from(skip.call([0, 1, 2, 3, 4], 0)), [0, 1, 2, 3, 4]);
        assert.deepEqual(Array.from(skip.call([0, 1, 2, 3, 4], 3)), [3, 4]);
        assert.deepEqual(Array.from(skip.call([0, 1, 2, 3, 4][Symbol.iterator](), 3)), [3, 4]);
    });
});
