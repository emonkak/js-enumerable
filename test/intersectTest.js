import assert from 'assert';
import intersect from '../dist/intersect';

describe('intersect()', function() {
    it('should Produces the set intersection of two sequences by using the default equality comparer to compare values', function() {
        const xs = [44, 26, 92, 30, 71, 38];
        const ys = [39, 59, 83, 47, 26, 4, 30];
        const result = xs::intersect(ys);

        assert.deepEqual(Array.from(result), [26, 30]);
    });
});
