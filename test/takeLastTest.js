import assert from 'assert';
import takeLast from '../dist/takeLast';

describe('takeLast()', function() {
    it('should returns a specified number of contiguous elements from the end of the sequence', function() {
        assert.deepEqual(Array.from([1, 2, 3, 4, 5]::takeLast(0)), []);
        assert.deepEqual(Array.from([1, 2, 3, 4, 5]::takeLast(5)), [1, 2, 3, 4, 5]);
        assert.deepEqual(Array.from([1, 2, 3, 4, 5]::takeLast(3)), [3, 4, 5]);
    });
});
