import * as assert from 'assert';
import buffer from '../src/buffer';

describe('buffer()', () => {
    it('should generates a sequence of non-overlapping adjacent buffers over the source sequence', () => {
        const xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(Array.from(buffer.call(xs, 3)), [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]);
        assert.deepEqual(Array.from(buffer.call(xs, 5)), [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]);
        assert.deepEqual(Array.from(buffer.call([], 5)), []);
        assert.deepEqual(Array.from(buffer.call(xs, 3, 2)), [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 8], [8, 9]]);
        assert.deepEqual(Array.from(buffer.call(xs, 3, 4)), [[0, 1, 2], [4, 5, 6], [8, 9]]);
    });

    it('should throws the exception if "count" or "skip" arguments is less than or equal to 0', () => {
        assert.throws(() => Array.from(buffer.call([], 0)), RangeError);
        assert.throws(() => Array.from(buffer.call([], 1, 0)), RangeError);
        assert.throws(() => Array.from(buffer.call([], 0, 1)), RangeError);
        assert.throws(() => Array.from(buffer.call([], 0, 0)), RangeError);
    });
});
