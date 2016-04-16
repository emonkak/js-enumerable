import assert from 'assert';
import skipLast from '../dist/skipLast';

describe('skipLast()', function() {
    it('should bypasses a specified number of contiguous elements from the end of the sequence', function() {
        assert.deepEqual(Array.from([]::skipLast(1)), []);
        assert.deepEqual(Array.from([0, 1, 2, 3, 4]::skipLast(0)), [0, 1, 2, 3, 4]);
        assert.deepEqual(Array.from([0, 1, 2, 3, 4]::skipLast(3)), [0, 1]);
    });
});
