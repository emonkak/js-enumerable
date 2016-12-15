import * as assert from 'assert';
import Enumerable from './bundle';

describe('buffer()', () => {
    it('should generates a sequence of non-overlapping adjacent buffers over the source sequence', () => {
        const xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(new Enumerable(xs).buffer(3).toArray(), [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]);
        assert.deepEqual(new Enumerable(xs).buffer(5).toArray(), [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]);
        assert.deepEqual(new Enumerable([]).buffer(5).toArray(), []);
        assert.deepEqual(new Enumerable(xs).buffer(3, 2).toArray(), [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 8], [8, 9]]);
        assert.deepEqual(new Enumerable(xs).buffer(3, 4).toArray(), [[0, 1, 2], [4, 5, 6], [8, 9]]);
    });

    it('should throws the exception if "count" or "skip" arguments is less than or equal to 0', () => {
        assert.throws(() => new Enumerable([]).buffer(0).toArray(), RangeError);
        assert.throws(() => new Enumerable([]).buffer(1, 0).toArray(), RangeError);
        assert.throws(() => new Enumerable([]).buffer(0, 1).toArray(), RangeError);
        assert.throws(() => new Enumerable([]).buffer(0, 0).toArray(), RangeError);
    });
});
