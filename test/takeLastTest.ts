import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('takeLast()', () => {
    it('should returns a specified number of contiguous elements from the end of the sequence', () => {
        const xs = [1, 2, 3, 4, 5];
        assert.deepEqual(new Enumerable(xs).takeLast(0).toArray(), []);
        assert.deepEqual(new Enumerable(xs).takeLast(5).toArray(), [1, 2, 3, 4, 5]);
        assert.deepEqual(new Enumerable(xs).takeLast(3).toArray(), [3, 4, 5]);
    });
});
