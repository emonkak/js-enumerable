import assert from 'assert';
import orderByDescending from '../dist/orderByDescending';

describe('orderByDescending()', function() {
    it('should sorts the elements of a sequence in ascending order according to a key', function() {
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderByDescending()), [4, 3, 2, 1]);
        assert.deepEqual(Array.from([3, 2, 4, 1]::orderByDescending(n => n % 2).thenByDescending(n => n)), [3, 1, 4, 2]);
    });
});
