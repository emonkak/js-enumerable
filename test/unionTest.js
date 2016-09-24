import assert from 'assert';
import union from '../dist/union';

describe('union()', () => {
    it('should produces the set union of two sequences', () => {
        assert.deepEqual(Array.from([1, 2, 3]::union([2, 3, 4])), [2, 3]);
        assert.deepEqual(Array.from([1, 2, 3]::union([])), []);
        assert.deepEqual(Array.from([]::union([2, 3, 4])), []);
        assert.deepEqual(Array.from([]::union([])), []);
    });
});
