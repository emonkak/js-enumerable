import * as assert from 'assert';
import intersect from '../src/intersect';

describe('intersect()', () => {
    it('should Produces the set intersection of two sequences by using the default equality comparer to compare values', () => {
        const xs = [44, 26, 92, 30, 71, 38];
        const ys = [39, 59, 83, 47, 26, 4, 30];
        const result = intersect.call(xs, ys);

        assert.deepEqual(Array.from(result), [26, 30]);
    });
});
