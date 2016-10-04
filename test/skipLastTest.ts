import * as assert from 'assert';
import skipLast from '../src/skipLast';

describe('skipLast()', () => {
    it('should bypasses a specified number of contiguous elements from the end of the sequence', () => {
        assert.deepEqual(Array.from(skipLast.call([], 1)), []);
        assert.deepEqual(Array.from(skipLast.call([0, 1, 2, 3, 4], 0)), [0, 1, 2, 3, 4]);
        assert.deepEqual(Array.from(skipLast.call([0, 1, 2, 3, 4], 3)), [0, 1]);
    });
});
