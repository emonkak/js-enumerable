import assert from 'assert';
import concat from '../dist/concat';

describe('concat()', () => {
    it('should concatenates two sequences', () => {
        assert.deepEqual(Array.from([]::concat([])), []);
        assert.deepEqual(Array.from([1, 2, 3]::concat([4, 5, 6])), [1, 2, 3, 4, 5, 6]);
        assert.deepEqual(Array.from([1, 2, 3]::concat([4, 5, 6], [7, 8, 9])), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
