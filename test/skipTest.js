import assert from 'assert';
import skip from '../dist/skip';

describe('skip()', function() {
    it('should bypasses a specified number of elements in a sequence and then returns the remaining elements', function() {
        assert.deepEqual(Array.from([]::skip(1)), []);
        assert.deepEqual(Array.from([0, 1, 2, 3, 4]::skip(0)), [0, 1, 2, 3, 4]);
        assert.deepEqual(Array.from([0, 1, 2, 3, 4]::skip(3)), [3, 4]);
        assert.deepEqual(Array.from([0, 1, 2, 3, 4][Symbol.iterator]()::skip(3)), [3, 4]);
    });
});
