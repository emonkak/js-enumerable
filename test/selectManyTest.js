import assert from 'assert';
import selectMany from '../dist/selectMany';

describe('selectMany()', function() {
    it('should projects each element of a sequence to a Iterable<T>', function() {
        assert.deepEqual(Array.from([1, 2, 3, 4]::selectMany(x => [x, x * 2])), [1, 2, 2, 4, 3, 6, 4, 8]);
    });
});
