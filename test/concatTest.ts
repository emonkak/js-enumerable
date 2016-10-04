import * as assert from 'assert';
import concat from '../src/concat';

describe('concat()', () => {
    it('should concatenates two sequences', () => {
        assert.deepEqual(Array.from(concat.call([], [])), []);
        assert.deepEqual(Array.from(concat.call([1, 2, 3], [4, 5, 6])), [1, 2, 3, 4, 5, 6]);
        assert.deepEqual(Array.from(concat.call([1, 2, 3], [4, 5, 6], [7, 8, 9])), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
