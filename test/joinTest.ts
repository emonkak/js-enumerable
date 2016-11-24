import * as assert from 'assert';
import Enumerable from '../src/';

describe('join()', () => {
    it('should correlates the elements of two sequences based on matching keys', () => {
        let xs = [0, 1, 2];
        let ys = [3, 6, 4];
        let result = new Enumerable(xs).join(
            ys,
            x => x % 3,
            y => y % 3,
            (x, y) => x + '-' + y
        );
        assert.deepEqual(Array.from(result), ['0-3', '0-6', '1-4']);

        xs = [3, 6, 4];
        ys = [0, 1, 2];
        result = new Enumerable(xs).join(
            ys,
            x => x % 3,
            y => y % 3,
            (x, y) => x + '-' + y
        );
        assert.deepEqual(Array.from(result), ['3-0', '6-0', '4-1']);
    });
});
