import assert from 'assert';
import except from '../dist/except';

describe('except()', () => {
    it('should produces the set difference of two sequences', () => {
        assert.deepEqual(Array.from([]::except([])), []);
        assert.deepEqual(Array.from([1, 2, 3, 4, 5, 6]::except([2, 3, 4])), [1, 5, 6]);
        assert.deepEqual(Array.from([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]::except([2, 3, 4])), [1, 5, 6]);
        assert.deepEqual(Array.from([2, 3, 4]::except([1, 2, 3, 4, 5, 6])), []);
    });
});
