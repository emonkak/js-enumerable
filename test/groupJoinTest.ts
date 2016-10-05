import * as assert from 'assert';
import Enumerable from '../src/bundle';

describe('groupJoin()', () => {
    it('should correlates the elements of two sequences based on equality of keys and groups the results', () => {
        let xs = [0, 1, 2];
        let ys = [4, 7, 6, 2, 3, 4, 8, 9];
        let result = new Enumerable(xs).groupJoin(
            ys,
            x => x % 3,
            y => y % 3,
            (x, i) => x + '-' + i.join('')
        );
        assert.deepEqual(Array.from(result), ['0-639', '1-474', '2-28']);

        xs = [0, 1, 2];
        ys = [3, 6, 4];
        result = new Enumerable(xs).groupJoin(
            ys,
            x => x % 3,
            y => y % 3,
            (x, i) => x + '-' + i.join('')
        );
        assert.deepEqual(Array.from(result), ['0-36', '1-4', '2-']);
    });
});
